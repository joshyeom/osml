import { DataProps } from "../types/DataProps"

export const fetchImageURL = (name: string, items: DataProps[]) => {
    const decoded = decodeURI(name)
    const filteredData = items.filter((v) => v.name === decoded)[0]
        if(filteredData){
            const imageURL = filteredData.imageUrl
            return imageURL
        }
}