import Image from "next/image";
import { StatsApi } from "../types/StatsApi";
import RenderStats from "./RenderStats";

export interface UseDetailsProps {
    itemIMG: string;
    itemName: string;
    forSell: number;
    subCategory: string;
    description: string;
    REQST: StatsApi | null;
}


const UseDetails = ({itemIMG, itemName, forSell, subCategory, description, REQST}: UseDetailsProps) => {
    return(
        <div className="row-span-9 col-span-2 flex flex-col items-center">
                <div className="w-[300px] bg-gray-700 flex flex-col items-center p-[10px] bg-[#222222]">
                    <div className="text-xl mb-[16px] text-white font-semibold">{itemName}</div>
                    <div className="w-full flex mb-[16px] justify-around">
                        <div className="w-[130px] h-[150px] flex justify-center items-center bg-transparent">
                            {itemIMG ? 
                                <Image src={itemIMG} alt={itemName} width={80} height={80}></Image>
                            : null}
                        </div>
                        <div className="">
                            {REQST ? <RenderStats REQST={REQST}></RenderStats> : null}
                            {forSell ? 
                                <div className="text-center">상점 판매가 {forSell}</div>
                            :null}
                            {description ?
                                <div className="w-[120px] flex justify-center items-center mb-3 text-gray-400">
                                    <span>{description}</span>
                                </div>
                            :null}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default UseDetails