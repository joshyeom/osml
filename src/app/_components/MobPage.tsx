"use client"
import { useParams } from "next/navigation"
import { DataListProps } from "../types/DataListProps"
import { useEffect, useState } from "react"
import { fetchDetails } from "../_utils/fetchDetails"
import { ItemProps } from "../types/ItemProps"
import { fetchImageURL } from "../_utils/fetchImageURL"
import { MobInfoProps } from "../types/MobInfoProps"
import Image from "next/image"
import { elementalCalculate } from "../_utils/elementalCalculate"
import MobMeta from "./MobMeta"
import ImageFallback from "./ImageFallback"
import EquipDetails from "./EquipDetails"

const MobPage = ({data}: DataListProps) => {
    const { name } = useParams()
    const [details, setDetails] = useState<ItemProps | null>(null)
    const [mobImage, setMobImage] = useState<string>("")
    const [mobName, setMobName] = useState<MobInfoProps["mobInfo"][0]["mobName"] | null>(null)
    const [mobId, setMobId] = useState<MobInfoProps["mobInfo"][0]["mobId"] | null>(null)
    const [mobMeta, setMobMeta] = useState<MobInfoProps["mobInfo"][0]["mobMeta"] | null>(null)
    const [drops, setDrops] = useState<MobInfoProps["mobInfo"][0]["drops"] | null>(null)
    const [dropItems, setDropItems] = useState<MobInfoProps["mobInfo"][0]["drops"]["items"] | null>(null)
    const [mobDescription, setMobDescription] = useState<MobInfoProps["mobInfo"][0]["mobDescription"] | null>(null)
    const [elemental, setElemental] = useState<string | null>(null)
    const [dropIMG, setDropIMG] = useState<string[]>([])

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
            setMobImage(fetchedItemIMG)
        }

    }, [name, data]
    );

    useEffect(() => {
        if(details === null){
            return
        }
        const mobInfo = details.result.exactMatchInfo.mobInfo[0]
        setMobName(mobInfo.mobName)
        setMobId(mobInfo.mobId)
        setMobMeta(mobInfo.mobMeta)
        setDrops(mobInfo.drops)
        setDropItems(mobInfo.drops.items)
        setMobDescription(mobInfo.mobDescription)
        const element = elementalCalculate(mobInfo.mobMeta.elementalAttributes!);
        if(element){
            setElemental(element)
        }else{
            setElemental("노말")
        }
        console.log(drops)
    },[details, drops])


    useEffect(() => {
        if(dropItems === null){
            return
        }
        for(let i = 0 ; i < dropItems.length ; i++){
            const fetched = fetchImageURL(dropItems[i].itemName, data)
            if(fetched){
                setDropIMG((prev) => prev.concat(fetched))
            }else{
                setDropIMG((prev) => prev.concat(""))
            }
        }
    },[dropItems, data])


    return (
        <section className="w-full mt-[350px] bg-[#2B2B2B]">
             <header className="h-[120px] flex data-center justify-center border-solid border-[1px] border-slate-600 items-center">
                <figure className="flex justify-between items-center">
                    {mobImage && mobName ? 
                        <>
                            <Image src={mobImage} alt={mobName} width={80} height={80}></Image>
                            <figcaption className="text-3xl ml-[30px]">{mobName}</figcaption>
                        </>
                        : null}
                </figure>
            </header>
            <section className="w-full grid grid-rows-10 grid-cols-10 bg-[#333333]">
                <section className="row-span-10 col-span-3 border-solid border-x-[1px] border-slate-600">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                        <h2 className="font-semibold">몹</h2>
                    </header>
                    {details ? 
                        <article className="row-span-10 col-span-2 flex flex-col items-center pt-5">
                        <section className="w-[300px] bg-gray-700 flex flex-col items-center p-[10px] bg-[#222222]">
                                {mobMeta && mobName && mobDescription && elemental ? 
                                        <MobMeta mobName={mobName} mobImage={mobImage} mobDescription={mobDescription} mobMeta={mobMeta} elemental={elemental}/>
                                : null}
                        </section>
                    </article>
                        : null
                    }
                </section>
                <section className="row-span-10 col-span-2 border-solid border-x-[1px] border-slate-600">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                        <h2 className="font-semibold">아이템</h2>
                    </header>
                    <ol className="bg-[#333333]">
                        {drops ? 
                            drops.items.map((item, i) => (
                                <li key={item.itemName} className="h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-slate-600">
                                    <figure className="w-[150px] h-[150px] relative flex justify-center items-center">
                                        <Image src={dropIMG[i]} alt={item.itemName} width={80} height={80}/>
                                    </figure>
                                    <div><span className="text-xl font-semibold">{item.itemName}</span></div>
                                    {item.itemTypeInfo.overallCategory === "Equip" ? (
                                        <div className="flex items-center justify-between w-[200px]">
                                            <span>추가 효과</span>
                                            <div className="flex flex-col">
                                                {
                                                    item.itemMeta.equip.attackSpeed ? (
                                                        <span>공격속도: {item.itemMeta.equip.attackSpeed}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incSTR ? (
                                                        <span>STR: +{item.itemMeta.equip.incSTR}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incDEX ? (
                                                        <span>DEX: +{item.itemMeta.equip.incDEX}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incINT ? (
                                                        <span>INT: +{item.itemMeta.equip.incINT}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incLUK ? (
                                                        <span>LUK: +{item.itemMeta.equip.incLUK}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incPDD ? (
                                                        <span>물리방어력: +{item.itemMeta.equip.incPDD}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incMDD ? (
                                                        <span>마법방어력: +{item.itemMeta.equip.incMDD}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incMDD ? (
                                                        <span>마법방어력: +{item.itemMeta.equip.incMDD}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incPAD ? (
                                                        <span>공격력: +{item.itemMeta.equip.incPAD}</span>)
                                                    : null
                                                }
                                                {
                                                    item.itemMeta.equip.incMDD ? (
                                                        <span>마력: +{item.itemMeta.equip.incMDD}</span>)
                                                    : null
                                                }
                                            </div>
                                        </div>
                                    ) : null}
                                </li>
                            ))
                        : null}
                    </ol>
                </section>
                <section className="row-span-10 col-span-3">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                        <h2 className="font-semibold">아이템 스텟</h2>
                    </header>
                    <ol className="bg-[#333333]">
                        {drops ? drops.items.map(item => (
                            <li key={item.itemName} className="w-full h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-slate-600">
                                {item.itemTypeInfo.overallCategory === "Equip" ? (
                                <>
                                <div className="w-[250px] flex justify-between">
                                            <span className="bg-gray-800 p-[10px] rounded bg-[#222222]">직업 {
                                                item.itemMeta.equip.reqJob === 0 ? "공용" :
                                                item.itemMeta.equip.reqJob === 1 || item.itemMeta.equip.reqJob === 3 ? "전사" :
                                                item.itemMeta.equip.reqJob === 2 ? "마법사" :
                                                item.itemMeta.equip.reqJob === 4 ? "궁수" :
                                                item.itemMeta.equip.reqJob === 8 || item.itemMeta.equip.reqJob === 9 ? "도적" :
                                                null}
                                            </span>
                                    <div className="bg-gray-800 p-[10px] rounded bg-[#222222]">
                                        {
                                            item.itemTypeInfo.overallCategory === "Equip" ? 
                                                <span className="text-gray-400">장비 종류 {
                                                item.itemTypeInfo.subCategory === "Shoes" ? "신발"
                                                : item.itemTypeInfo.subCategory === "Overall" ? "전신"
                                                : item.itemTypeInfo.subCategory === "One-Handed Sword" ? "한손검"
                                                : item.itemTypeInfo.subCategory === "ne-Handed Blunt Weapon" ? "한손둔기"
                                                : item.itemTypeInfo.subCategory === "Two-Handed Blunt" ? "두손둔기"
                                                : item.itemTypeInfo.subCategory === "One-Handed Axe" ? "한손도끼"
                                                : item.itemTypeInfo.subCategory === "Two-Handed Axe" ? "두손도끼"
                                                : item.itemTypeInfo.subCategory === "Spear" ? "창"
                                                : item.itemTypeInfo.subCategory === "Bow" ? "활"
                                                : item.itemTypeInfo.subCategory === "Crossbow" ? "석궁"
                                                : item.itemTypeInfo.subCategory === "Wand" ? "완드"
                                                : item.itemTypeInfo.subCategory === "Staff" ? "스태프"
                                                : item.itemTypeInfo.subCategory === "Claw" ? "아대"
                                                : item.itemTypeInfo.subCategory === "Hat" ? "모자"
                                                : item.itemTypeInfo.subCategory === "Top" ? "상의"
                                                : item.itemTypeInfo.subCategory === "Bottom" ? "하의"
                                                : item.itemTypeInfo.subCategory === "Earrings" ? "귀고리"
                                                : item.itemTypeInfo.subCategory === "Glove" ? "장갑"
                                                : item.itemTypeInfo.subCategory === "Cape" ? "망토"
                                                : item.itemTypeInfo.subCategory === "Shield" ? "방패"
                                                : item.itemTypeInfo.subCategory}
                                                </span>
                                            :  <span className="text-gray-400">{
                                                    item.itemTypeInfo.subCategory === "Rare Ore" ? "원석"
                                                    : item.itemTypeInfo.subCategory === "Potion" ? "포션"
                                                    : item.itemTypeInfo.subCategory === "Monster Drop" ? "몹 드랍"
                                                    : item.itemTypeInfo.subCategory === "Quest Item" ? "퀘스트 아이템"
                                                    : item.itemTypeInfo.subCategory === "Thrown" ? "투척 무기"
                                                    : item.itemTypeInfo.subCategory === "Status Cure" ? "상태 회복"
                                                    : item.itemTypeInfo.subCategory === "Arrow" ? "활 전용 화살"
                                                    : item.itemTypeInfo.subCategory === "Crossbow Bolt" ? "석궁 전용 화살"
                                                    : item.itemTypeInfo.subCategory === "Food and Drink" ? "식음료"
                                                    : item.itemTypeInfo.subCategory === "Mineral Ore" ? "원석"
                                                    : item.itemTypeInfo.subCategory}
                                            </span>}
                                        </div>
                                </div>
                                <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
                                    <span>요구 스탯</span>
                                    <div className="flex flex-col">
                                        {item.itemMeta.equip.reqLevel ? 
                                            <span>REQLEV {item.itemMeta.equip.reqLevel}</span>
                                        : null}
                                        {item.itemMeta.equip.reqPOP ? 
                                            <span>REQPOP {item.itemMeta.equip.reqPOP}</span>
                                        : null}
                                        {item.itemMeta.equip.reqSTR ? 
                                            <span>REQSTR {item.itemMeta.equip.reqSTR}</span>
                                        : null}
                                        {item.itemMeta.equip.reqDEX ? 
                                            <span>REQDEX {item.itemMeta.equip.reqDEX}</span>
                                        :null}
                                        {item.itemMeta.equip.reqINT ? 
                                            <span>REQINT {item.itemMeta.equip.reqINT}</span>
                                        : null}
                                        {item.itemMeta.equip.reqLUK ? 
                                            <span>REQLUK {item.itemMeta.equip.reqLUK}</span>
                                        : null }
                                    </div>
                                </div>
                                <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
                                    <span>업그레이드 횟수 {item.itemMeta.equip.tuc}</span>
                                </div>
                                <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
                                    <span>상점 판매가 {item.itemMeta.shop.price}</span>
                                </div>
                                </>
                                ) : null}
                            </li>)) : null}
                        </ol>
                </section>
                <section className="row-span-10 col-span-2 border-solid border-x-[1px] border-slate-600">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                        <h2 className="font-semibold">드랍 확률</h2>
                    </header>
                    <ol className="bg-[#333333]">
                        {drops ? drops.items.map(item => (
                        <li key={item.itemName} className="w-full h-[400px] flex flex-col justify-around items-center py-[30px] border-solid border-b-[1px] border-slate-600">
                            <span className="text-5xl">{item.dropChance}</span>
                            <div className="text-5xl">
                                <p className="text-center">
                                    <span>
                                        {item.drops.every} / {item.drops.in} <br></br>
                                    </span>
                                    <span className="text-3xl text-gray-400">확률</span>
                                </p>
                            </div>
                        </li>
                        )) : null}
                    </ol>
                </section>
            </section>
        </section>
    )
}

export default MobPage