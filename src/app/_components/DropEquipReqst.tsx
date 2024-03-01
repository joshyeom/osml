import { StatsApi } from "../types/StatsApi"
import RenderStats from "./RenderStats"

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

const DropEquipReqst = ({itemName , itemTypeInfo, itemMeta}: DropEquipReqstProps) => {
    return (
        <li className="w-full h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-slate-600">
                                {itemTypeInfo.overallCategory === "Equip" ? (
                                <>
                                <div className="w-[250px] flex justify-between">
                                            <span className="bg-gray-800 p-[10px] rounded bg-[#222222]">{
                                                itemMeta.equip.reqJob === 0 ? "공용" :
                                                itemMeta.equip.reqJob === 1 || itemMeta.equip.reqJob === 3 ? "전사" :
                                                itemMeta.equip.reqJob === 2 ? "마법사" :
                                                itemMeta.equip.reqJob === 4 ? "궁수" :
                                                itemMeta.equip.reqJob === 8 || itemMeta.equip.reqJob === 9 ? "도적" :
                                                null} 전용
                                            </span>
                                    <div className="bg-gray-800 p-[10px] rounded bg-[#222222]">
                                        {
                                            itemTypeInfo.overallCategory === "Equip" ? 
                                                <span>{
                                                itemTypeInfo.subCategory === "Shoes" ? "신발"
                                                : itemTypeInfo.subCategory === "Overall" ? "전신"
                                                : itemTypeInfo.subCategory === "One-Handed Sword" ? "한손검"
                                                : itemTypeInfo.subCategory === "One-Handed Blunt Weapon" ? "한손둔기"
                                                : itemTypeInfo.subCategory === "Two-Handed Blunt" ? "두손둔기"
                                                : itemTypeInfo.subCategory === "One-Handed Axe" ? "한손도끼"
                                                : itemTypeInfo.subCategory === "Two-Handed Axe" ? "두손도끼"
                                                : itemTypeInfo.subCategory === "Spear" ? "창"
                                                : itemTypeInfo.subCategory === "Bow" ? "활"
                                                : itemTypeInfo.subCategory === "Crossbow" ? "석궁"
                                                : itemTypeInfo.subCategory === "Wand" ? "완드"
                                                : itemTypeInfo.subCategory === "Staff" ? "스태프"
                                                : itemTypeInfo.subCategory === "Claw" ? "아대"
                                                : itemTypeInfo.subCategory === "Hat" ? "모자"
                                                : itemTypeInfo.subCategory === "Top" ? "상의"
                                                : itemTypeInfo.subCategory === "Bottom" ? "하의"
                                                : itemTypeInfo.subCategory === "Earrings" ? "귀고리"
                                                : itemTypeInfo.subCategory === "Glove" ? "장갑"
                                                : itemTypeInfo.subCategory === "Cape" ? "망토"
                                                : itemTypeInfo.subCategory === "Shield" ? "방패"
                                                : itemTypeInfo.subCategory}
                                                </span>
                                            :  <span className="text-gray-400">{
                                                    itemTypeInfo.subCategory === "Rare Ore" ? "원석"
                                                    : itemTypeInfo.subCategory === "Potion" ? "포션"
                                                    : itemTypeInfo.subCategory === "Monster Drop" ? "몹 드랍"
                                                    : itemTypeInfo.subCategory === "Quest Item" ? "퀘스트 아이템"
                                                    : itemTypeInfo.subCategory === "Thrown" ? "투척 무기"
                                                    : itemTypeInfo.subCategory === "Status Cure" ? "상태 회복"
                                                    : itemTypeInfo.subCategory === "Arrow" ? "활 전용 화살"
                                                    : itemTypeInfo.subCategory === "Crossbow Bolt" ? "석궁 전용 화살"
                                                    : itemTypeInfo.subCategory === "Food and Drink" ? "식음료"
                                                    : itemTypeInfo.subCategory === "Mineral Ore" ? "원석"
                                                    : itemTypeInfo.subCategory}
                                            </span>}
                                        </div>
                                </div>
                                <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
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
                                <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
                                    <div>업그레이드 횟수 <span className="text-gray-400">{itemMeta.equip.tuc}</span></div>
                                </div>
                                <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
                                    <div>상점 판매가 <span className="text-gray-400">{itemMeta.shop.price}</span></div>
                                </div>
                                </>
                                ) : itemTypeInfo.overallCategory === "Use" ? (
                                    <>
                                        {itemMeta.equip ?
                                                <div className="w-[250px] flex justify-around items-center bg-gray-800 p-[10px] rounded bg-[#222222]">
                                                    <span className="font-bold">추가 효과</span>
                                                    <div className="flex flex-col">
                                                        <RenderStats REQST={itemMeta.equip}/>
                                                    </div>
                                                </div>
                                            :  <div className="w-[250px] flex justify-around items-center bg-gray-800 p-[10px] rounded bg-[#222222]">
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
                                        <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
                                            <div>상점 판매가 <span className="text-gray-400">{itemMeta.shop.price}</span></div>
                                        </div>
                                </>
                                ): (
                                    <>
                                    <div className="w-[250px] flex items-center justify-around bg-gray-800 p-[10px] rounded bg-[#222222]">
                                        <div>상점 판매가 <span className="text-gray-400">{itemMeta.shop.price}</span></div>
                                    </div>
                                </>
                                )}
                            </li>
    )
}

export default DropEquipReqst