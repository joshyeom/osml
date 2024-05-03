import { DataProps } from "../types/DataProps"
import ImageFallback from "./ImageFallback"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface MobListProps{
    name: string;
    keyword: string
    imageUrl: string
    category: string
    id: string
}


export const MobList:React.FC<MobListProps> = ({name, imageUrl, keyword, category, id}) => {
    const [cursor, setCursor] = useState<string>("cursor-pointer")
    const router = useRouter()
    const routeHandler = (name: string) => {
        const encodedName = encodeURIComponent(name);
        setCursor("cursor-wait")
        router.push(`/mobPage/${encodedName}`);
    }
    
    if(!name.includes(keyword)){
        return null
    }
    const index = name.indexOf(keyword)
    const front = name.slice(0, index)
    const highlight = name.slice(index, index + keyword.length)
    const end = name.slice(index + keyword.length, name.length)
    return (
    <li key={name} onClick={() => routeHandler(name)} className={`relative group flex item-center h-20 p-4 pl-7 hover:bg-red-600 ${cursor}`}>
        <figure className="w-[50px] h-[50px] relative">
            <ImageFallback imageUrl={imageUrl} id={id} name={name}/>
        </figure>
        <p className="pl-7 text-lg text-white leading-10">
            <span>{front}</span>
            <span className="text-red-600 group-hover:hidden">{highlight}</span>
            <span className="text-white font-semibold hidden group-hover:inline">{highlight}</span>
            <span>{end}</span>
        </p> 
    </li>
    )
}

// test2