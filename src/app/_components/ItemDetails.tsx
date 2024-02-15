"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { fetchDetails } from "../_utils/fetchDetails"
import { fetchImageURL } from "../_utils/fetchImageURL"
import { DataListProps } from "../types/DataListProps"
import { ItemProps } from "../types/ItemProps"
import { StatsApi } from "../types/StatsApi"

const ItemDetails = ({data}: DataListProps) => {
    const { name } = useParams()
    const [details, setDetails] = useState<ItemProps | null>(null)
    const [itemIMG, setItemIMG] = useState<string>("")
    const [itemName, setItemName] = useState<string>("")
    const [REQLEV, setREQLEV] = useState<number>(0)
    const [REQST, setREQST] = useState<StatsApi | null>(null)
    const [forSell, setForSell] = useState<number>(0)
    const [category, setCategory] = useState<string>("")

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
        console.log(details)
        const itemInfo = details.result.exactMatchInfo.itemInfo[0]
        const itemMeta = itemInfo.itemMeta
        setItemName(itemInfo.itemName)
        setREQLEV(itemMeta.chair.reqLevel)
        setREQST(itemMeta.equip)
        setForSell(itemMeta.shop.price)
        setCategory(itemInfo.itemTypeInfo.subCategory)
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
            <div className="row-span-9 col-span-2 flex flex-col justify-center items-center">
                <div className="w-[300px] h-[450px] bg-gray-700 flex flex-col items-center p-[6px]">
                    <div className="text-xl mb-[16px] text-white font-semibold">{details ?  itemName : null}</div>
                    <div className="w-full flex mb-[16px] justify-around">
                            {itemIMG ? 
                                <div className="w-[150px] h-[150px] flex justify-center items-center bg-gray-100">
                                        <Image src={itemIMG} alt={itemIMG} width={100} height={100}></Image>
                                </div>
                            : null}
                            {REQST ? 
                            <ol className="text-s text-white">
                                <li>REQ LEV: {REQST.reqLevel}</li>
                                <li>REQ POP: {REQST.reqPOP}</li>
                                <li>REQ STR: {REQST.reqSTR}</li>
                                <li>REQ DEX: {REQST.reqDEX}</li>
                                <li>REQ INT: {REQST.reqINT}</li>
                                <li>REQ LUK: {REQST.reqLUK}</li>
                            </ol> : null
                            }
                    </div>
                        {REQST ? 
                        <>
                            <ol className="flex justify-between text-s text-white space-x-5 mb-[16px]">
                                <li className={REQST.reqJob !== 0 ? "text-red-500": "text-white"}>초보자</li>
                                <li className={REQST.reqJob !== 1 ? "text-red-500": "text-white"}>전사</li>
                                <li className={REQST.reqJob !== 2 ? "text-red-500": "text-white"}>마법사</li>
                                <li className={REQST.reqJob !== 3 ? "text-red-500": "text-white"}>궁수</li>
                                <li className={REQST.reqJob !== 4 ? "text-red-500": "text-white"}>도적</li>
                            </ol>
                            <ol className="text-lg text-white flex flex-col gap-[3px] text-center">
                                <li>무기분류: {category === "Wand" ? "완드" : null}</li>
                                <li>공격속도: {REQST.attackSpeed === 6 ? "보통" : null}</li>
                                <li>공격력: +{REQST.incPAD}</li>
                                <li>마력: +{REQST.incMAD}</li>
                                <li>업그레이드 가능 횟수: {REQST.tuc}</li>
                                <li>상점 판매가: {forSell}</li>
                            </ol>
                        </>
                        : null }
                </div>
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