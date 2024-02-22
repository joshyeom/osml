import { DataProps } from "../types/DataProps"
import ImageFallback from "./ImageFallback"

export const MobList:React.FC<DataProps> = ({name, imageUrl, keyword, id}) => {
    if(!name.includes(keyword)){
        return
    }
    const index = name.indexOf(keyword)
    const front = name.slice(0, index)
    const highlight = name.slice(index, index + keyword.length)
    const end = name.slice(index + keyword.length, name.length)
    return (
    <li key={name} className="relative group flex item-center h-20 p-4 pl-7 hover:bg-red-600">
        <figure className="w-[50px] h-[50px] relative">
            <ImageFallback imageUrl={imageUrl} alt={name}/>
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
