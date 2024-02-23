'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import "../../styles/global.css"
import { ItemList } from "./ItemList"
import { MobList } from "./MobList"
import { SearchProps } from "../types/SearchProps"
import { filterItemHandler } from "../_utils/filterItemHandler"

const Search: React.FC<SearchProps> = ({data, position, width}) => {
    const [keyword, setKeyword] = useState<string>("")
    const [itemList, setItemList] = useState<SearchProps["data"]>([])
    const [mobList, setMobList] = useState<SearchProps["data"]>([])

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value)
    }
    
    useEffect(() => {
        const sortedItem = filterItemHandler(data, keyword)
        if(sortedItem !== undefined){
            const mob = sortedItem.filter(v => v.category === "mob")
            const item = sortedItem.filter(v => v.category === "item")
            setMobList(mob.slice(0, 5))
            setItemList(item.slice(0, 5))
        }
      }, [keyword, data]);


    return (
        <section className={`${width} flex flex-col items-center mt-14 ${position}`}>
            <figure>
                <Image src="/logo.png" alt="logo" width={400} height={100}/>
            </figure>
            <input 
                type="text" 
                onChange={changeHandler}
                value={keyword}
                placeholder="검색어를 입력해 주세요"
                className="w-full min-w-[300px] h-9 border-white border bg-transparent text-white placeholder:italic placeholder:text-slate-400 pl-5 py-6 mt-10 rounded-t-lg"
            />
            {
            mobList.length > 0 || itemList.length > 0 ? 
                <ul className={`w-full min-w-[300px] border-white border border-t-0 flex flex-col justify-center align-center mb-14`}>
                    {itemList.length > 0 ? <div className="text-center my-5 text-white">아이템</div> : null}
                    {
                    itemList.length > 0 ? itemList.map(v => (
                            <ItemList key={v.id} name={v.name} imageUrl={v.imageUrl} id={v.id} category={v.category} keyword={keyword}></ItemList>
                        )) : null
                    }
                    {mobList.length > 0 ? <div className="text-center my-5 text-white">몹</div> : null}
                    {
                    mobList.length > 0 ? mobList.map(v => (
                        <MobList key={v.id} name={v.name} imageUrl={v.imageUrl} id={v.id} category={v.category} keyword={keyword}></MobList> 
                        )) : null
                    }
                </ul>
            : null
            }
        </section>
    )
}

export default Search