'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import "../../styles/global.css"

const Search = ({items}: any) => {
    const [keyword, setKeyword] = useState<string>("")
    const [list, setList] = useState([])
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value)
    }

    useEffect(() => {
        if (keyword) {
          const filteredItem = items.filter((v: any) => v[0].includes(keyword));
        
          const sortedItem = filteredItem.sort((a:string[], b:string[]) => {
            if(a[0].startsWith(keyword) && !b[0].startsWith(keyword)){
                return -1
            }   else if (!a[0].startsWith(keyword) && b[0].startsWith(keyword)) {
                return 1;
              } else {
                return 0;
              }
          })
          setList(sortedItem.slice(0, 5))

          
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
            {list.length > 0 ? 
                <ul className="w-full border-white border border-t-0 flex flex-col justify-center align-center">
                    <span className="text-center mt-5 text-white">정보</span>
                    {
                        list.map((v: string[]) => {
                            const index = v[0].indexOf(keyword)
                            const front = v[0].slice(0, index)
                            const highlight = v[0].slice(index, index + keyword.length)
                            const end = v[0].slice(index + keyword.length, v[0].length)
                            console.log(index, highlight ,front, end)
                            return (
                            <li key={v[0]} className="relative group flex item-center h-20 p-4 pl-7 hover:bg-red-600">    
                            <Image src={v[1]} alt={v[0]} width={40} height={30}/>
                            <div className="pl-7 text-lg text-white leading-10">
                                <span>{front}</span>
                                <span className="text-red-600 group-hover:hidden">{highlight}</span>
                                <span className="text-white hidden group-hover:inline">{highlight}</span>
                                <span>{end}</span>
                            </div>
                            </li>
                        )
                        }
                        
                        )
                    }
                </ul>
            : null}
        </main>
    )
}

export default Search