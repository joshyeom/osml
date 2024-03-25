'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import "../../styles/global.css"
import { ItemList } from "./ItemList"
import { MobList } from "./MobList"
import { SearchProps } from "../types/SearchProps"
import { filterAndSortByName } from "../_utils/filterAndSortedList"
import { filterAndSortByNameProps } from "../_utils/filterAndSortedList"

const Search: React.FC<SearchProps> = ({data, position, width}) => {
    interface SetListTypes {
        name: string
        keyword: string
        imageUrl: string
        category: string
        id: string
    }

    const [keyword, setKeyword] = useState<string>("")
    const [itemList, setItemList] = useState<SetListTypes[] | null>(null)
    const [mobList, setMobList] = useState<SetListTypes[] | null>(null)

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value)
    }
    
    useEffect(() => {
        if (!data.items || !data.mobs) return;
        const items = data.items[0];
        const mobs = data.mobs[0];
        
        const sortedItems = filterAndSortByName({data:items, keyword: keyword, category: "item"});
      
        const sortedMobs = filterAndSortByName({data:mobs, keyword: keyword, category: "mob"});
        setItemList(sortedItems);
        setMobList(sortedMobs);
    }, [keyword, data])


    return (
        <section className={`${width} flex flex-col items-center mt-14 ${position} z-10`}>
            <figure>
                <Image src="/logo.png" alt="logo" width={400} height={100}/>
            </figure>
            <input 
                type="text" 
                onChange={changeHandler}
                value={keyword}
                placeholder="검색어를 입력해 주세요"
                className="w-full h-9 border-white border bg-transparent text-white placeholder:italic placeholder:text-slate-400 pl-5 py-6 mt-10 rounded-t-lg"
            />
            {itemList && mobList ?
                <ul className={`w-full border-white border border-t-0 flex flex-col justify-center align-center mb-14`}>
                   {itemList.length > 0 ? <div className="text-center my-5 text-white">아이템</div> : null}
                    {
                    itemList.length > 0 ? itemList.map(v => (
                            <ItemList key={v.name} name={v.name} imageUrl={v.imageUrl} category={v.category} keyword={v.keyword}></ItemList>
                        )) : null
                    }
                    {mobList.length > 0 ? <div className="text-center my-5 text-white">몹</div> : null}
                    {
                    mobList.length > 0 ? mobList.map(v => (
                            <MobList key={v.name} name={v.name} imageUrl={v.imageUrl} category={v.category} keyword={v.keyword} id={v.id}></MobList> 
                        )) : null
                    }
                </ul>
            : null
            }
        </section>
    )
}

export default Search