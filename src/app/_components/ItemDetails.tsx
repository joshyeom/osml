"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchDetails } from "../_utils/fetchDetails"
import { fetchImageURL } from "../_utils/fetchImageURL"
import { DataListProps } from "../types/DataListProps"
import { ItemProps } from "../types/ItemProps"

const ItemDetails = ({data}: DataListProps) => {
    const { name } = useParams()
    const [details, setDetails] = useState<ItemProps | null>(null)
    const [itemIMG, setItemIMG] = useState<string>("")
    useEffect(() => {
        if(typeof name !== "string"){
            return
        }

        const fetchData = async () => {
            try{
                const fetchedDetails = await fetchDetails(name)
                setDetails(fetchedDetails)
            }catch(err){
                console.error(err)
            }
        }
        fetchData()

        const fetchedImageURL = fetchImageURL(name, data)
        if(fetchedImageURL){
            setItemIMG(fetchedImageURL)
        }

    }, [name, data]);


    return (
        <section className="w-full h-full grid grid-rows-10 grid-cols-10 mt-[350px]">
            <header className="row-span-1 col-span-10  bg-white flex data-center justify-center">
                <div>{details ? details.result.exactMatchInfo.itemInfo[0].itemName : null}</div>
                {itemIMG ? 
                    <Image src={itemIMG} alt={itemIMG} width={20} height={20}></Image>
                : null}
            </header>
            <div className="row-span-9 col-span-2 bg-blue-900">
                <div>아이템</div>
                <div>세부정보</div>
            </div>
            <div className="row-span-9 col-span-4 bg-red-900">
                <div>몹 이름</div>
                <div>세부정보</div>
            </div>
            <div className="row-span-9 col-span-2 bg-green-900">
                <div>스텟</div>
                <div>세부정보</div>
            </div>
            <div className="row-span-9 col-span-2 bg-yellow-900">
                <div>드랍 확률</div>
                <div>세부정보</div>
            </div>
        </section>
    )
}

export default ItemDetails