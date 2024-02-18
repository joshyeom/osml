import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"

interface DropMobsStatProps{
    mob: MobsThatDropTheItemProps
    elemental: string
}

const DropMobsStat = ({mob, elemental}: DropMobsStatProps) => {
    return(
        <li key={mob.mobName} className="w-full h-[300px] flex flex-col justify-around items-center mb-[100px]">
            <div className="w-1/2 flex justify-between">
                <div className="bg-gray-800 p-[10px] rounded">요구 명중률 {mob.mobMeta.accuracyRequiredToHit}</div>
                <div className="bg-gray-800 p-[10px] rounded">회피율: {mob.mobMeta.accuracy}</div>
            </div>
            <div className="w-1/2 flex justify-center bg-gray-800 py-[10px] px-[25px] rounded">넉백 최소 데미지: {mob.mobMeta.minimumPushDamage}</div>
            <div className="w-1/2 flex justify-center bg-gray-800 py-[10px] px-[40px] rounded">물리 방어력: {mob.mobMeta.physicalDefense}</div>
            <div className="w-1/2 flex justify-center bg-gray-800 py-[10px] px-[40px] rounded">마법 방어력: {mob.mobMeta.magicDefense}</div>
            <div className="w-1/2 flex justify-center bg-gray-800 py-[10px] px-[40px] rounded">{elemental}</div>
        </li>
    )
}

export default DropMobsStat