import { DataProps } from "../types/DataProps"

export const fetchImageURL = (name: string, items: DataProps[]) => {
    if(name.startsWith("%")){
        name = decodeURI(name)
    }
    const filteredData = items.filter((v) => v.name === name)[0]
        if(filteredData){
            const imageURL = filteredData.imageUrl
            return imageURL
        }
}