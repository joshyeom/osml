import Image from "next/image";
import { StatsApi } from "../types/StatsApi";
import RenderStats from "./RenderStats";

export interface EtcDetailsProps {
    itemIMG: string;
    itemName: string;
    forSell: number;
    subCategory: string;
    description: string;
    REQST: StatsApi | null;
}


const EtcDetails = ({itemIMG, itemName, forSell, subCategory, description, REQST}: EtcDetailsProps) => {
    return(
            <article className="row-span-10 col-span-2 flex flex-col items-center pt-5">
                <section className="w-[300px] bg-gray-700 flex flex-col items-center p-[10px] bg-[#222222]">
                    <header className="text-xl mb-[16px] text-white font-semibold">{itemName}</header>
                    <div className="w-full flex mb-[16px] justify-around">
                        <figure className="w-[130px] h-[150px] flex justify-center items-center bg-transparent">
                            {itemIMG ? 
                                <Image src={itemIMG} alt={itemName} width={80} height={80}></Image>
                            : null}
                        </figure>
                        <article className="w-[140px] flex flex-col justify-center">
                            {REQST ? <RenderStats REQST={REQST}></RenderStats> : null}
                            {description ?
                                <p className="flex justify-center items-center mb-3 text-gray-400">
                                    {description}
                                </p>
                            :null}
                            {forSell ? 
                                <p className="flex justify-center items-center mb-2">상점 판매가 {forSell}</p>
                            :null}
                        </article>
                    </div>
                </section>
            </article>
        )
}

export default EtcDetails