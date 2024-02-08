import Image from "next/image"
import { ItemListProps } from "../types/ItemListProps"

export const ItemList: React.FC<ItemListProps>  = ({name, imageUrl, id, category, keyword}) => {
    if(!name.includes(keyword)){
        return
    }
    const index = name.indexOf(keyword)
    const front = name.slice(0, index)
    const highlight = name.slice(index, index + keyword.length)
    const end = name.slice(index + keyword.length, name.length)
    return (
    <li key={name} className="relative group flex item-center h-20 p-4 pl-7 hover:bg-red-600">    
    <Image src={imageUrl} alt={name} width={50} height={50}/>
    <div className="pl-7 text-lg text-white leading-10">
        <span className="front">{front}</span>
        <span className="text-red-600 group-hover:hidden">{highlight}</span>
        <span className="text-white font-semibold hidden group-hover:inline">{highlight}</span>
        <span className="end">{end}</span>
    </div>
    </li>
    )
}
