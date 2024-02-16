import Image from "next/image"
import { useEffect } from "react"
import { ItemDetailsProps } from "../types/ItemDetailsProps"

const ItemDetails = ({itemIMG, REQLEV, REQST, itemName, forSell, category}: ItemDetailsProps) => {

    useEffect(() => {
        REQST?.reqPOP
    },[REQST])
    
    return(
    <div className="row-span-9 col-span-2 flex flex-col justify-center items-center">
        <header className="w-full h-[50px] text-xl text-white text-center">
            <h2>아이템</h2>
        </header>
                <div className="w-[300px] h-[450px] bg-gray-700 flex flex-col items-center p-[6px]">
                    <div className="text-xl mb-[16px] text-white font-semibold">{itemName}</div>
                    <div className="w-full flex mb-[16px] justify-around">
                        <div className="w-[150px] h-[150px] flex justify-center items-center bg-gray-100">
                            {itemIMG ? 
                                <Image src={itemIMG} alt={itemName} width={100} height={100}></Image>
                            : null}
                        </div>
                        {REQLEV && REQST ?  
                            <ol className="text-s text-white">
                                    <li>REQ LEV: {REQLEV}</li>
                                    <li>REQ POP: {REQST.reqPOP ?? 0}</li>
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
                    : null}
                </div>
            </div>
    )
}


export default ItemDetails