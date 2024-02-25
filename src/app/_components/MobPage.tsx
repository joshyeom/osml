"use client"
import { useParams } from "next/navigation"
import { DataListProps } from "../types/DataListProps"
import { useEffect, useState } from "react"
import { fetchDetails } from "../_utils/fetchDetails"
import { ItemProps } from "../types/ItemProps"
import { fetchImageURL } from "../_utils/fetchImageURL"
import { MobInfoProps } from "../types/MobInfoProps"
import Image from "next/image"

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
    },[details])


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
                            <header className="text-xl mb-[16px] text-white font-semibold">{mobName}</header>
                            <div className="w-full flex flex-col mb-[16px] justify-around">
                                <figure className="w-full h-[150px] flex justify-center items-center bg-transparent">
                                    {mobImage && mobName ? 
                                        <Image src={mobImage} alt={mobName} width={80} height={80}></Image>
                                    : null}
                                </figure>
                                <article className="w-full flex flex-col justify-center">
                                    {mobDescription ?
                                        <p className="flex justify-center items-center mb-3 text-gray-400">
                                            {mobDescription}
                                        </p>
                                    :null}
                                </article>
                            </div>
                                {mobMeta ? 
                                    <ol>
                                        <li>{mobMeta.level}</li>
                                        <li>{mobMeta.maxHP}</li>
                                        <li>{mobMeta.maxMP}</li>
                                        <li>{mobMeta.exp}</li>
                                        <li>{mobMeta.accuracyRequiredToHit}</li>
                                        <li>{mobMeta.elementalAttributes}</li>
                                    </ol>
                                : null}
                        </section>
                    </article>
                        : null
                    }
                </section>
                <section className="row-span-10 col-span-2">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                        <h2 className="font-semibold">아이템</h2>
                    </header>
                    <ol className="bg-[#333333]">
                    </ol>
                </section>
                <section className="row-span-10 col-span-3">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                        <h2 className="font-semibold">아이템 스텟</h2>
                    </header>
                    <ol className="bg-[#333333]">
                    
                    </ol>
                </section>
                <section className="row-span-10 col-span-2">
                    <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                        <h2 className="font-semibold">드랍 확률</h2>
                    </header>
                    <ol className="bg-[#333333]">
                       
                    </ol>
                </section>
            </section>
        </section>
    )
}

export default MobPage