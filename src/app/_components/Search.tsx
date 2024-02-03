'use client'
import Image from "next/image"
import { useState, useEffect } from "react"

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
        <>
            <input 
                type="text" 
                onChange={changeHandler}
                value={keyword}
            />
            <ul>
                {
                list.map((v: any) => 
                        (<li key={v[0]}>    
                            <span>{v[0]}</span>
                            <Image src={v[1]} alt={v[0]} width={30} height={30}/>
                        </li>)
                    )
                }
            </ul>
        </>
    )
}

export default Search