'use client'
import Image from "next/image"
import { ChangeEvent } from "react"
import { useState } from "react"

const Search = ({items}: any) => {
    const [searchValue, setSearchValue] = useState<string>("")
    const [list, setList] = useState([])
    const changeHandler = (e:ChangeEvent) => {
        setSearchValue(e.target.value)
        setList(items.filter((v: any) => v[0].includes(searchValue)))
        console.log(list)
    }
    return (
        <>
            <input type="text" onChange={changeHandler}/>
            <ul>
                {
                list.map((v: any) => 
                        (<li>    
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