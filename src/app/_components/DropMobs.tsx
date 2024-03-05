import ImageFallback from "./ImageFallback"
import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface dropMobProps{
    mobIMG: string;
    mob: MobsThatDropTheItemProps
}

const DropMobs = ({mobIMG, mob }: dropMobProps) => {
    const router = useRouter()
    const [cursor, setCursor] = useState<string>("cursor-pointer")
    const routeHandler = (name: string) => {
        const encodedName = encodeURIComponent(name);
        setCursor("cursor-wait")
        router.push(`/mobPage/${encodedName}`);
    }


    return(
        <li className={`h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-r-[1px] border-slate-600 ${cursor}`}
            onClick={() => routeHandler(mob.mobName.replaceAll(" ", ""))}>
            <figure className="w-[150px] h-[150px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[50px] max-md:h-[50px] relative">
                <ImageFallback imageUrl={mobIMG} alt={mob.mobName}/>
            </figure>
            <p className="text-xl max-sm:text-base"><span className="w-7/12 font-semibold">{mob.mobName}</span> <span className="text-gray-400">Lv. {mob.mobMeta.level}</span></p>
            <div className="w-7/12 flex h-[30px] justify-between">
                <div className="w-5/12 bg-red-500 flex justify-center items-center text-center rounded max-sm:text-xs">HP {mob.mobMeta.maxHP}</div>
                <div className="w-5/12 bg-blue-500 flex justify-center items-center text-center rounded max-sm:text-xs">MP {mob.mobMeta.maxMP}</div>
            </div>
            <div  className="w-7/12 h-[30px] bg-green-500 flex justify-center items-center rounded">EXP {mob.mobMeta.exp}</div>
        </li>
    )
}

export default DropMobs