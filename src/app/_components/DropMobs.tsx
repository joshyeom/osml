import ImageFallback from "./ImageFallback"
import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps";

interface dropMobProps{
    mobIMG: string;
    mob: MobsThatDropTheItemProps
}

const DropMobs = ({mobIMG, mob }: dropMobProps) => {
    return(
        <li className="h-[300px] flex flex-col justify-around items-center mb-[100px]">
            <div className="w-[150px] h-[150px] relative">
                <ImageFallback imageUrl={mobIMG} alt={mob.mobName}/>
            </div>
            <div><span className="text-xl font-semibold">{mob.mobName}</span> <span>Lv. {mob.mobMeta.level}</span></div>
            <div></div>
            <div className="w-7/12 flex h-[30px] justify-between">
                <div className="w-5/12 bg-red-500 flex justify-center items-center rounded">HP {mob.mobMeta.maxHP}</div>
                <div className="w-5/12 bg-blue-500 flex justify-center items-center rounded">MP {mob.mobMeta.maxMP}</div>
            </div>
            <div  className="w-7/12 h-[30px] bg-green-500 flex justify-center items-center rounded">EXP {mob.mobMeta.exp}</div>
        </li>
    )
}

export default DropMobs