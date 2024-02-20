"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchDetails } from "../_utils/fetchDetails"
import { fetchImageURL } from "../_utils/fetchImageURL"
import { DataListProps } from "../types/DataListProps"
import { ItemProps } from "../types/ItemProps"
import { StatsApi } from "../types/StatsApi"
import EquipDetails from "./EquipDetails"
import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"
import DropMobs from "./DropMobs"
import { elementalCalculate } from "../_utils/elementalCalculate"
import DropMobsStat from "./DropMobsStat"
import Percentage from "./Percentage"
import UseDetails from "./UseDetails"

const ItemPage = ({data}: DataListProps) => {
    const { name } = useParams()
    const [details, setDetails] = useState<ItemProps | null>(null)
    const [itemIMG, setItemIMG] = useState<string>("")
    const [mobIMG, setMobIMG] = useState<string[]>([])
    const [itemName, setItemName] = useState<string>("")
    const [REQST, setREQST] = useState<StatsApi | null>(null)
    const [REQLEV, setREQLEV] = useState<number>(0)
    const [forSell, setForSell] = useState<number>(0)
    const [overallCategory, setOverallCategory] = useState<string>("")
    const [subCategory, setSubCategory] = useState<string>("")
    const [dropMob, setDropMob] = useState<MobsThatDropTheItemProps[] | null>(null)
    const [elemental, setElmental] = useState<string[]>([])
    const [description, setDescription] = useState<string>("")

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
        const itemInfo = details.result.exactMatchInfo.itemInfo[0] !== undefined ? details.result.exactMatchInfo.itemInfo[0] : details.result.itemInfo[0];
        const itemMeta = itemInfo.itemMeta
        setItemName(itemInfo.itemName)
        setDropMob(itemInfo.mobsThatDropTheItem)
        setOverallCategory(itemInfo.itemTypeInfo.overallCategory)
        if(itemInfo.itemTypeInfo.overallCategory === "Equip"){
            setREQLEV(itemMeta.chair.reqLevel)
            setREQST(itemMeta.equip)
            setForSell(itemMeta.shop.price)
            setSubCategory(itemInfo.itemTypeInfo.subCategory)
        }else if(itemInfo.itemTypeInfo.overallCategory === "Use"){
            setREQST(itemMeta.equip)
            setForSell(itemMeta.shop.price)
            setDescription(itemInfo.itemDescription)
        }
    },[details])
    
    useEffect(() => {
        if(dropMob === null){
            return
        }
        console.log(dropMob)
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
        <section className="w-full mt-[350px] bg-[#2B2B2B] border-solid border-[1px] border-slate-600">
            <header className="h-[120px] flex data-center justify-center items-center">
                <div className="flex justify-between items-center">
                    {itemIMG ? 
                        <Image src={itemIMG} alt={itemIMG} width={80} height={80}></Image>
                        : null}
                    {details ?   
                        <span className="text-3xl ml-[30px]">{itemName}</span>
                        : null}
                </div>
            </header>
            <div className="w-full h-full grid grid-rows-10 grid-cols-10 bg-[#333333]">
                <div className="row-span-10 col-span-2">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center mb-10">
                        <h2>아이템</h2>
                    </header>
                    {overallCategory === "Equip" ? 
                        <EquipDetails REQLEV={REQLEV} itemIMG={itemIMG} itemName={itemName} REQST={REQST} forSell={forSell} subCategory={subCategory}></EquipDetails>
                        : null
                    }
                    {overallCategory === "Use" ? 
                        <UseDetails itemIMG={itemIMG} itemName={itemName} forSell={forSell} REQST={REQST} subCategory={subCategory} description={description}></UseDetails>
                        : null
                    }
                </div>
            <div className="row-span-10 col-span-3">
                <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center mb-10">
                    <h2>드랍 몹</h2>
                </header>
                <ol className="bg-[#333333]">
                {dropMob ? 
                    dropMob.map((mob, i) => (
                            <DropMobs key={mob.mobName} mobIMG={mobIMG[i]} mob={mob} ></DropMobs>
                        )) : null}
                </ol>
            </div>
            <div className="row-span-10 col-span-3">
                <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center mb-10">
                    <h2>몹 스텟</h2>
                </header>
                <ol className="bg-[#333333]">
                {dropMob ? 
                    dropMob.map((mob, i) => (
                            <DropMobsStat key={mob.mobName} mob={mob} elemental={elemental[i]}></DropMobsStat>
                        )) : null}
                </ol>
            </div>
            <div className="row-span-10 col-span-2">
                <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center mb-10">
                    <h2>드랍 확률</h2>
                </header>
                <ol className="bg-[#333333]">
                    {dropMob ? 
                        dropMob.map((mob) => (
                            <Percentage key={mob.mobName} mob={mob}></Percentage>
                        )) : null}
                </ol>
            </div>
        </div>
        </section>
    )
}

export default ItemPage