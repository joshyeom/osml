"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchDetails } from "../_utils/fetchDetails"
import { fetchImageURL } from "../_utils/fetchImageURL"
import { DataListProps } from "../types/DataListProps"
import { ItemProps } from "../types/ItemProps"
import { StatsApi } from "../types/StatsApi"
import ItemDetails from "./ItemDetails"
import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"

const ItemPage = ({data}: DataListProps) => {
    const { name } = useParams()
    const [details, setDetails] = useState<ItemProps | null>(null)
    const [itemIMG, setItemIMG] = useState<string>("")
    const [mobIMG, setMobIMG] = useState<string[]>([])
    const [itemName, setItemName] = useState<string>("")
    const [REQST, setREQST] = useState<StatsApi | null>(null)
    const [REQLEV, setREQLEV] = useState<number>(0)
    const [forSell, setForSell] = useState<number>(0)
    const [category, setCategory] = useState<string>("")
    const [dropMob, setDropMob] = useState<MobsThatDropTheItemProps[] | null>(null)

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

    }, [name, data]
    );

    useEffect(() => {
        if(details === null){
            return
        }
        
        const itemInfo = details.result.exactMatchInfo.itemInfo[0]
        const itemMeta = itemInfo.itemMeta
        setItemName(itemInfo.itemName)
        setREQLEV(itemMeta.chair.reqLevel)
        setREQST(itemMeta.equip)
        setForSell(itemMeta.shop.price)
        setCategory(itemInfo.itemTypeInfo.subCategory)
        setDropMob(itemInfo.mobsThatDropTheItem)
    },[details])



    return (
        <section className="w-full h-full grid grid-rows-10 grid-cols-10 mt-[350px]">
            <header className="row-span-1 text-white col-span-10 flex data-center justify-center items-center">
                {details ?   
                    <div>{itemName}</div>
                : null}
                {itemIMG ? 
                    <Image src={itemIMG} alt={itemIMG} width={30} height={30}></Image>
                : null}
            </header>
                <ItemDetails REQLEV={REQLEV} itemIMG={itemIMG} itemName={itemName} REQST={REQST} forSell={forSell} category={category}></ItemDetails>
            <div className="row-span-9 col-span-4 bg-red-900">
            <header className="w-full h-[50px] text-xl text-white text-center">
                <h2>드랍 몹</h2>
            </header>
                {/* <Image></Image> */}
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

export default ItemPage