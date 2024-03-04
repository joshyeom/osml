import Image from "next/image"
import { MobInfoProps } from "../types/MobInfoProps"
import { StatsApi } from "../types/StatsApi"
import { useRouter } from "next/navigation"
interface DropEquipsProps{
    i: number
    dropIMG :string[]
    itemMeta: {
        equip: StatsApi
    }
    itemName: string
    itemTypeInfo: {
        overallCategory : string 
    }
}


const DropEquipStats = ({itemMeta, itemName ,i, dropIMG, itemTypeInfo}: DropEquipsProps) => {
    const router = useRouter()
    const routeHandler = (name: string) => {
        const encodedName = encodeURIComponent(name);
        router.push(`/itemPage/${encodedName}`);
    }
    
    return(
        <li className="h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-slate-600 cursor-pointer"
            onClick={() => routeHandler(itemName)}>
            <figure className="w-[150px] h-[150px] relative flex justify-center items-center">
                <Image src={dropIMG[i]} alt={itemName} width={80} height={80}/>
            </figure>
            <div className="text-center py-3"><span className="text-xl font-semibold max-sm:text-base">{itemName}</span></div>
            {itemTypeInfo.overallCategory === "Equip" ? (
                <div className="flex items-center justify-between bg-gray-800 p-[10px] rounded bg-[#222222] max-sm:text-xs">
                    <span className="font-bold">추가 효과</span>
                    <div className="flex flex-col pl-[10px]">
                        {
                            itemMeta.equip.attackSpeed ? (
                                <div>공격속도: <span className="text-gray-400">{itemMeta.equip.attackSpeed}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incSTR ? (
                                <div>STR: <span className="text-gray-400">+{itemMeta.equip.incSTR}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incDEX ? (
                                <div>DEX: <span className="text-gray-400">+{itemMeta.equip.incDEX}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incINT ? (
                                <div>INT: <span className="text-gray-400">+{itemMeta.equip.incINT}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incLUK ? (
                                <div>LUK: <span className="text-gray-400">+{itemMeta.equip.incLUK}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incPDD ? (
                                <div>물리방어력: <span className="text-gray-400">+{itemMeta.equip.incPDD}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incMDD ? (
                                <div>마법방어력: <span className="text-gray-400">+{itemMeta.equip.incMDD}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incMDD ? (
                                <div>마법방어력: <span className="text-gray-400">+{itemMeta.equip.incMDD}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incPAD ? (
                                <div>공격력: <span className="text-gray-400">+{itemMeta.equip.incPAD}</span></div>)
                            : null
                        }
                        {
                            itemMeta.equip.incMDD ? (
                                <div>마력: <span className="text-gray-400">+{itemMeta.equip.incMDD}</span></div>)
                            : null
                        }
                        
                    </div>
                </div>
            ) : null}
        </li>
    )
}

export default DropEquipStats