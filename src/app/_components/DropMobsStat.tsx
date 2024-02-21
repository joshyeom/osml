import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"

interface DropMobsStatProps{
    mob: MobsThatDropTheItemProps
    elemental: string
}

const DropMobsStat = ({mob, elemental}: DropMobsStatProps) => {
    return(
        <li key={mob.mobName} className="w-full h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-slate-600">
            <div className="w-[250px] flex justify-between">
                <div className="bg-gray-800 p-[10px] rounded bg-[#222222]">요구 명중률 {mob.mobMeta.accuracyRequiredToHit}</div>
                <div className="bg-gray-800 p-[10px] rounded bg-[#222222]">회피율 {mob.mobMeta.accuracy}</div>
            </div>
            <div className="w-[250px] flex justify-center bg-gray-800 py-[10px] px-[25px] rounded bg-[#222222]">넉백 최소 데미지 {mob.mobMeta.minimumPushDamage}</div>
            <div className="w-[250px] flex justify-center bg-gray-800 py-[10px] px-[40px] rounded bg-[#222222]">물리 방어력 {mob.mobMeta.physicalDefense}</div>
            <div className="w-[250px] flex justify-center bg-gray-800 py-[10px] px-[40px] rounded bg-[#222222]">마법 방어력 {mob.mobMeta.magicDefense}</div>
            <div className="w-[250px] flex justify-center bg-gray-800 py-[10px] px-[40px] rounded bg-[#222222]">{elemental}</div>
        </li>
    )
}

export default DropMobsStat