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
        <main className="w-3/12 flex flex-col items-center">
            <Image src="https://osmlib.com/d5386814b15c0b011cd619fd05125d45.png" alt="logo" width={400} height={100}/>
            <input 
                type="text" 
                onChange={changeHandler}
                value={keyword}
                placeholder="장갑 공격력 주문서 60%"
                className="w-full h-9 border-white border bg-transparent text-white placeholder:italic placeholder:text-slate-400 pl-5 py-6 mt-10 rounded-t-lg"
            />
            {keyword.length > 0 ? 
                <ul className="w-full border-white border border-t-0 flex flex-col justify-center align-center">
                    <span className="text-center mt-5 text-white">정보</span>
                    {
                        list.map((v: any) => 
                        (<li key={v[0]} className="flex item-center h-20 p-4 pl-7 hover:bg-red-600">    
                                <Image src={v[1]} alt={v[0]} width={40} height={30}/>
                                <div className="pl-7 text-lg text-white leading-10">{v[0]}</div>
                            </li>)
                        )
                    }
                </ul>
            : null}
        </main>
    )
}

export default Search