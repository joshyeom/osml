'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import "../../styles/global.css"


interface SearchProps{
    items: string[]
}

const Search = ({items}: SearchProps) => {
    const [keyword, setKeyword] = useState<string>("")
    const [itemList, setItemList] = useState<string[]>([])
    const [mobList, setMobList] = useState<string[]>([])
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value)
    }

    useEffect(() => {

        if (keyword) {
          const filteredItem = items.filter((v: string) => v[0].includes(keyword));
        
          const sortedItem = filteredItem.sort((a:string, b:string) => {
            if(a[0].startsWith(keyword) && !b[0].startsWith(keyword)){
                return -1
            }   else if (!a[0].startsWith(keyword) && b[0].startsWith(keyword)) {
                return 1;
              } else {
                return 0;
              }
          })
          const mob = sortedItem.filter((v: string) => v[2] === "mob")
          const item = sortedItem.filter((v: string) => v[2] === "item")
          setMobList(mob.slice(0, 5))
          setItemList(item.slice(0, 5))
        }
      }, [keyword, items]);

    return (
        <main className="w-760px flex flex-col items-center">
            <Image src="https://osmlib.com/d5386814b15c0b011cd619fd05125d45.png" alt="logo" width={400} height={100}/>
            <input 
                type="text" 
                onChange={changeHandler}
                value={keyword}
                placeholder="검색어를 입력해 주세요"
                className="w-full h-9 border-white border bg-transparent text-white placeholder:italic placeholder:text-slate-400 pl-5 py-6 mt-10 rounded-t-lg"
            />
            {mobList.length > 0 || itemList.length > 0? 
                <ul className="w-full border-white border border-t-0 flex flex-col justify-center align-center">
                    {itemList.length > 0 ? <div className="text-center mt-5 text-white">아이템</div> : null}
                    {
                    itemList.length > 0 ? itemList.map((v: string) => {
                            if(!v[0].includes(keyword)){
                                return
                            }
                            const index = v[0].indexOf(keyword)
                            const front = v[0].slice(0, index)
                            const highlight = v[0].slice(index, index + keyword.length)
                            const end = v[0].slice(index + keyword.length, v[0].length)
                            return (
                            <li key={v[0]} className="relative group flex item-center h-20 p-4 pl-7 hover:bg-red-600">    
                            <Image src={v[1]} alt={v[0]} width={50} height={50}/>
                            <div className="pl-7 text-lg text-white leading-10">
                                <span className="front">{front}</span>
                                <span className="text-red-600 group-hover:hidden">{highlight}</span>
                                <span className="text-white font-semibold hidden group-hover:inline">{highlight}</span>
                                <span className="end">{end}</span>
                            </div>
                            </li>
                        )
                        }) : null
                    }
                    {mobList.length > 0 ? <div className="text-center mt-5 text-white">몹</div> : null}
                    {
                    mobList.length > 0 ? mobList.map((v: string) => {
                            if(!v[0].includes(keyword)){
                                return
                            }
                            const index = v[0].indexOf(keyword)
                            const front = v[0].slice(0, index)
                            const highlight = v[0].slice(index, index + keyword.length)
                            const end = v[0].slice(index + keyword.length, v[0].length)
                            return (
                            <li key={v[0]} className="relative group flex item-center h-20 p-4 pl-7 hover:bg-red-600">    
                            <Image src={v[1]} alt={v[0]} width={40} height={30}/>
                            <div className="pl-7 text-lg text-white leading-10">
                                <span>{front}</span>
                                <span className="text-red-600 group-hover:hidden">{highlight}</span>
                                <span className="text-white font-semibold hidden group-hover:inline">{highlight}</span>
                                <span>{end}</span>
                            </div>
                            </li>
                        )
                        }) : null
                    }
                </ul>
            : null}
        </main>
    )
}

export default Search