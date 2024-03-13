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
        let filteredItem = []
        let filteredMob = []
        const items = data.items[0]
        const mobs = data.mobs[0]
        Object.keys(items).forEach((id) => {
            if(id === "_id") return
            if(items[id].name.includes(keyword)){
                filteredItem.push({name: items[id].name, imageUrl: `http://maplestory.io/api/gms/62/item/${id}/icon?resize=3`, category: "item"})
            }
        });
        const sortedItem = filteredItem.sort((a, b) => {
            if(a.name.startsWith(keyword) && !b.name.startsWith(keyword)){
                return -1
            }   else if (!a.name.startsWith(keyword) && b.name.startsWith(keyword)) {
                return 1;
              } else {
                return 0;
              }
          }).slice(0,5)
        Object.keys(mobs).forEach((id) => {
            if(id === "_id") return
            if(mobs[id].name.includes(keyword)){
                filteredMob.push({name: mobs[id].name, imageUrl: `http://maplestory.io/api/gms/62/mob/animated/${id}/move`, category: "mob"})
            }
        });
        const sortedMob = filteredMob.sort((a, b) => {
            if(a.name.startsWith(keyword) && !b.name.startsWith(keyword)){
                return -1
            }   else if (!a.name.startsWith(keyword) && b.name.startsWith(keyword)) {
                return 1;
              } else {
                return 0;
              }
          }).slice(0,5)
          setItemList(sortedItem)
          setMobList(sortedMob)
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
            {
            mobList.length > 0 || itemList.length > 0 ? 
                <ul className={`w-full border-white border border-t-0 flex flex-col justify-center align-center mb-14`}>
                   {itemList.length > 0 ? <div className="text-center my-5 text-white">아이템</div> : null}
                    {
                    itemList.length > 0 ? itemList.map(v => (
                            <ItemList key={v.name} name={v.name} imageUrl={v.imageUrl} category={v.category} keyword={keyword}></ItemList>
                        )) : null
                    }
                    {mobList.length > 0 ? <div className="text-center my-5 text-white">몹</div> : null}
                    {
                    mobList.length > 0 ? mobList.map(v => (
                        <MobList key={v.id} name={v.name} imageUrl={v.imageUrl} category={v.category} keyword={keyword}></MobList> 
                        )) : null
                    }
                </ul>
            : null
            }
        </section>
    )
}

export default Search