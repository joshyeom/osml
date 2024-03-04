import { StatsApi } from "../types/StatsApi"
import RenderStats from "./RenderStats"
import { categoryTextMap } from "../_utils/categoryTextMap"
import { reqJobMap } from "../_utils/reqJobMap"

interface DropEquipReqstProps{
    itemName: string
    itemTypeInfo: {
        overallCategory : string 
        subCategory: string
    }
    itemMeta:{
        consumeSpec: {
        hpR: string,
        mpR: string,
        pad: string,
        pdd: string,
        mad: string,
        hp: string,
        mp: string
        },
      chair: {
          reqLevel: number
      },
      equip: StatsApi
      shop: {
          price: number
      }
  }
}

const DropEquipReqst = ({itemTypeInfo, itemMeta}: DropEquipReqstProps) => {
    const {overallCategory, subCategory} = itemTypeInfo
    const categoryText = categoryTextMap[overallCategory]?.[subCategory] || ""
    const jobText = reqJobMap[itemMeta?.equip?.reqJob] || ""

    return (
        <li className="w-full h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-slate-600">
            {overallCategory === "Equip" ? (
            <>
            <div className="w-5/6 flex justify-between max-sm:text-xs">
                        <span className="w-3/6 bg-gray-800 text-center p-2 rounded bg-[#222222]">
                            {jobText} 전용
                        </span>
                <div className="w-2/6 bg-gray-800 p-2 text-center rounded bg-[#222222]">
                    <span>{categoryText}</span>
                </div>
            </div>
            <div className="w-5/6 flex items-center justify-around bg-gray-800 p-2 rounded bg-[#222222] max-sm:text-xs">
                <span className="font-bold">요구 스탯</span>
                <div className="flex flex-col">
                    {itemMeta.equip.reqLevel ? 
                        <div>REQLEV <span className="text-gray-400">{itemMeta.equip.reqLevel}</span></div>
                    : null}
                    {itemMeta.equip.reqPOP ? 
                        <div>REQPOP <span className="text-gray-400">{itemMeta.equip.reqPOP}</span></div>
                    : null}
                    {itemMeta.equip.reqSTR ? 
                        <div>REQSTR <span className="text-gray-400">{itemMeta.equip.reqSTR}</span></div>
                    : null}
                    {itemMeta.equip.reqDEX ? 
                        <div>REQDEX <span className="text-gray-400">{itemMeta.equip.reqDEX}</span></div>
                    :null}
                    {itemMeta.equip.reqINT ? 
                        <div>REQINT <span className="text-gray-400">{itemMeta.equip.reqINT}</span></div>
                    : null}
                    {itemMeta.equip.reqLUK ? 
                        <div>REQLUK <span className="text-gray-400">{itemMeta.equip.reqLUK}</span></div>
                    : null }
                </div>
            </div>
            <div className="w-5/6 flex items-center justify-around bg-gray-800 p-2 rounded bg-[#222222] max-sm:text-xs">
                <div>업그레이드 횟수 <span className="text-gray-400">{itemMeta.equip.tuc}</span></div>
            </div>
            <div className="w-5/6 flex items-center justify-around bg-gray-800 p-2 rounded bg-[#222222] max-sm:text-xs">
                <div>상점 판매가 <span className="text-gray-400">{itemMeta.shop.price}</span></div>
            </div>
            </>
            ) : itemTypeInfo.overallCategory === "Use" ? (
                <>
                    {itemMeta.equip ?
                            <div className="w-5/6 flex justify-around items-center bg-gray-800 p-2 rounded bg-[#222222] max-sm:text-xs">
                                <span className="font-bold">추가 효과</span>
                                <div className="flex flex-col">
                                    <RenderStats REQST={itemMeta.equip}/>
                                </div>
                            </div>
                        :  <div className="w-5/6 flex justify-around items-center bg-gray-800 p-2 rounded bg-[#222222] max-sm:text-xs">
                                <span className="font-bold">추가 효과</span>
                                <div className="flex flex-col">
                                    {itemMeta.consumeSpec ? 
                                    itemMeta.consumeSpec.hpR ? <p>HP <span className="text-gray-400">+{itemMeta.consumeSpec.hpR}%</span></p> 
                                    : itemMeta.consumeSpec.mpR ? <p>MP <span className="text-gray-400">+{itemMeta.consumeSpec.mpR}%</span></p>
                                    : itemMeta.consumeSpec.hp ? <p>HP <span className="text-gray-400">+{itemMeta.consumeSpec.hp}</span></p>
                                    : itemMeta.consumeSpec.mp ? <p>MP <span className="text-gray-400">+{itemMeta.consumeSpec.mp}</span></p>
                                    : itemMeta.consumeSpec.pad ? <p>공격력 <span className="text-gray-400">+{itemMeta.consumeSpec.pad}</span></p>
                                    : itemMeta.consumeSpec.pdd ? <p>물리방어력 <span className="text-gray-400">+{itemMeta.consumeSpec.pdd}</span></p>
                                    : itemMeta.consumeSpec.mad ? <p>마력 <span className="text-gray-400">+{itemMeta.consumeSpec.mad}</span></p>
                                    : null
                                    : null}
                                </div>
                            </div>
                        }
                    <div className="w-5/6 flex items-center justify-around bg-gray-800 p-2 rounded bg-[#222222] max-sm:text-xs">
                        <div>상점 판매가 <span className="text-gray-400">{itemMeta.shop.price}</span></div>
                    </div>
            </>
            ): (
                <>
                <div className="w-5/6 flex items-center justify-around bg-gray-800 p-2 rounded bg-[#222222] max-sm:text-xs">
                    <div>상점 판매가 <span className="text-gray-400">{itemMeta.shop.price}</span></div>
                </div>
            </>
            )}
        </li>
    )
}

export default DropEquipReqst