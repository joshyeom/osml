import { error } from "console"
import { ItemListProps } from "../types/DataProps"

export const fetchImageURL = (name: string, items: ItemListProps[]) => {
    try{
        const decoded = decodeURI(name)
        const filteredData = items.filter((v) => v.name === decoded)[0]
        if(filteredData){
            const imageURL = filteredData.imageUrl
            return imageURL
        }else{
            throw(error)
        }
    }catch(err){
        console.error(err)
    }
}