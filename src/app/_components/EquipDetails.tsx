import Image from "next/image"
import { EquipDetailsProps } from "../types/EquipDetailsProps"
import { useState, useEffect } from "react"
import { categoryTranslate } from "../_utils/categoryTranslate"

const EquipDetails = ({itemIMG, REQLEV, REQST, itemName, forSell, subCategory}: EquipDetailsProps) => {  
    console.log(REQST)
    const [categoryKr, setCategroyKr] = useState<string>("")
    const [attackSpeed, setAttackSpeed] = useState<string>("")
    
    useEffect(() => {
        const kr = categoryTranslate(subCategory)
        setCategroyKr(kr)
    },[subCategory])

    useEffect(() => {
        const speed = REQST?.attackSpeed
        switch(speed){
            case 7: setAttackSpeed("느림(2)")
            break;
            case 6: setAttackSpeed("보통(3)")
            break;
            case 5: setAttackSpeed("빠름(4)")
            break;
            case 4: setAttackSpeed("빠름(5)")
        }
    },[REQST])
    console.log(REQST)

    return(
    <div className="row-span-9 col-span-2 flex flex-col items-center">
                <div className="w-[300px] bg-gray-700 flex flex-col items-center p-[10px] bg-[#222222]">
                    <div className="text-xl mb-[16px] text-white font-semibold">{itemName}</div>
                    <div className="w-full flex mb-[16px] justify-around">
                        <div className="w-[150px] h-[150px] flex justify-center items-center bg-transparent">
                            {itemIMG ? 
                                <Image src={itemIMG} alt={itemName} width={100} height={100}></Image>
                            : null}
                        </div>
                        {REQLEV && REQST ?  
                            <ol className="text-s text-white">
                                    <li>REQ LEV: {REQLEV}</li>
                                    <li>REQ POP: {REQST.reqPOP ? REQST.reqPOP : 0}</li>
                                    <li>REQ STR: {REQST.reqSTR}</li>
                                    <li>REQ DEX: {REQST.reqDEX}</li>
                                    <li>REQ INT: {REQST.reqINT}</li>
                                    <li>REQ LUK: {REQST.reqLUK}</li>
                            </ol>
                        : null}
                    </div>
                    {REQST ? 
                        <>
                            <ol className="flex justify-between text-s text-white space-x-5 mb-[16px]">
                                <li className={REQST.reqJob === 0 ? "text-white": "text-red-500"}>공용</li>
                                <li className={REQST.reqJob === 1 || REQST.reqJob === 3 ? "text-white": "text-red-500"}>전사</li>
                                <li className={REQST.reqJob === 2 ? "text-white": "text-red-500"}>마법사</li>
                                <li className={REQST.reqJob === 4 ? "text-white": "text-red-500"}>궁수</li>
                                <li className={REQST.reqJob === 9 || REQST.reqJob === 8 ? "text-white": "text-red-500"}>도적</li>
                            </ol>
                            <ol className="text-lg text-white flex flex-col gap-[3px] text-center">
                                <li>장비분류: {categoryKr}</li>
                                {REQST.attackSpeed ? 
                                    <li>공격속도: {attackSpeed}</li>
                                : null}
                                {REQST.incSTR ?
                                    <li>STR: +{REQST.incSTR}</li>
                                : null}
                                {REQST.incDEX ?
                                    <li>DEX: +{REQST.incDEX}</li>
                                : null}
                                {REQST.incINT ?
                                    <li>INT: +{REQST.incINT}</li>
                                : null}
                                {REQST.incLUK ?
                                    <li>LUK: +{REQST.incLUK}</li>
                                : null}
                                {REQST.incPDD ? 
                                    <li>물리방어력: +{REQST.incPDD}</li>
                                : null}
                                {REQST.incMDD ? 
                                    <li>마법방어력: +{REQST.incMDD}</li>
                                : null}
                                {REQST.incPAD ? 
                                    <li>공격력: +{REQST.incPAD}</li>
                                : null}
                                {REQST.incMAD ? 
                                        <li>마력: +{REQST.incMAD}</li>
                                : null}
                                <li>업그레이드 가능 횟수: {REQST.tuc}</li>
                                <li>상점 판매가: {forSell}</li>
                            </ol>
                        </>
                    : null}
                </div>
            </div>
    )
}


export default EquipDetails