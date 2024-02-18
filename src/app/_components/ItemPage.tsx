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
import DropMobs from "./DropMobs"
import { elementalCalculate } from "../_utils/elementalCalculate"
import DropMobsStat from "./DropMobsStat"
import Percentage from "./Percentage"


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
    const [elemental, setElmental] = useState<string[]>([])

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

        const fetchedItemIMG = fetchImageURL(name, data)
        if(fetchedItemIMG){
            setItemIMG(fetchedItemIMG)
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
    
    useEffect(() => {
        if(dropMob === null){
            return
        }
        for(let i = 0 ; i < dropMob.length ; i++){
            const trimed = dropMob[i].mobName.replace(/ /g,"")
            const fetched = fetchImageURL(trimed, data)
            if(fetched){
                setMobIMG((prev) => prev.concat(fetched))
            }
            const element = elementalCalculate(dropMob[i].mobMeta.elementalAttributes!);
            if(element){
                setElmental((prev) => prev.concat(element))
            }else{
                setElmental((prev) => prev.concat("노말"))
            }
        }
    },[dropMob, data])

    return (
        <section className="w-full h-full grid grid-rows-10 grid-cols-10 mt-[350px]">
            <header className="row-span-1 col-span-10 flex data-center justify-center items-center">
                {itemIMG ? 
                    <Image src={itemIMG} alt={itemIMG} width={30} height={30}></Image>
                : null}
                {details ?   
                    <div>{itemName}</div>
                : null}
            </header>
                <ItemDetails REQLEV={REQLEV} itemIMG={itemIMG} itemName={itemName} REQST={REQST} forSell={forSell} category={category}></ItemDetails>
            <div className="row-span-9 col-span-3">
                <header className="w-full h-[50px] text-xl text-center">
                    <h2>드랍 몹</h2>
                </header>
                <ol>
                {dropMob ? 
                    dropMob.map((mob, i) => (
                            <DropMobs key={mob.mobName} mobIMG={mobIMG[i]} mob={mob} ></DropMobs>
                        )) : null}
                </ol>
            </div>
            <div className="row-span-9 col-span-3">
                <header className="w-full h-[50px] text-xl text-center">
                    <h2>스텟</h2>
                </header>
                <ol>
                {dropMob ? 
                    dropMob.map((mob, i) => (
                            <DropMobsStat key={mob.mobName} mob={mob} elemental={elemental[i]}></DropMobsStat>
                        )) : null}
                </ol>
            </div>
            <div className="row-span-9 col-span-2">
                <header className="w-full h-[50px] text-xl text-center">
                    <h2>확률</h2>
                </header>
                <ol>
                    {dropMob ? 
                        dropMob.map((mob) => (
                            <Percentage key={mob.mobName} mob={mob}></Percentage>
                        )) : null}
                </ol>
            </div>
        </section>
    )
}

export default ItemPage