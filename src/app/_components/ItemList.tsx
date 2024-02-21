import Image from "next/image"
import { DataProps } from "../types/DataProps"
import { useRouter } from "next/navigation"

export const ItemList: React.FC<DataProps>  = ({name, imageUrl, id, category, keyword}) => {
    const router = useRouter()

    const routeHandler = (name: string) => {
        const encodedName = encodeURIComponent(name);
        router.push(`/itemPage/${encodedName}`);
    }

    if(!name.includes(keyword)){
        return null
    }
    const index = name.indexOf(keyword)
    const front = name.slice(0, index)
    const highlight = name.slice(index, index + keyword.length)
    const end = name.slice(index + keyword.length, name.length)
    return (
    <li key={name} onClick={() => routeHandler(name)} className="cursor-pointer relative group flex item-center h-20 p-4 pl-7 hover:bg-red-600">    
    <figure>
        <Image src={imageUrl} alt={name} width={50} height={50}/>
    </figure>
        <p className="pl-7 text-lg text-white leading-10">
            <span className="front">{front}</span>
            <span className="text-red-600 group-hover:hidden">{highlight}</span>
            <span className="text-white font-semibold hidden group-hover:inline">{highlight}</span>
            <span className="end">{end}</span>
        </p>
    </li>
    )
}
