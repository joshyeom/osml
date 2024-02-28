import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"

interface DropMobsStatProps{
    mob: MobsThatDropTheItemProps
    elemental: string
}

const DropMobsStat = ({mob, elemental}: DropMobsStatProps) => {
    return(
        <li key={mob.mobName} className="w-full h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-r-[1px] border-slate-600">
            <div className="w-[250px] flex justify-between">
                <div className="bg-gray-800 p-[10px] rounded bg-[#222222]">요구 명중률 <span className="text-gray-400">{mob.mobMeta.accuracyRequiredToHit}</span></div>
                <div className="bg-gray-800 p-[10px] rounded bg-[#222222]">회피율 <span className="text-gray-400">{mob.mobMeta.accuracy}</span></div>
            </div>
            <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">넉백 최소 데미지 <span className="text-gray-400">{mob.mobMeta.minimumPushDamage}</span></div>
            <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">물리 방어력  <span className="text-gray-400">{mob.mobMeta.physicalDefense}</span></div>
            <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">마법 방어력 <span className="text-gray-400">{mob.mobMeta.magicDefense}</span></div>
            <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">{elemental}</div>
        </li>
    )
}

export default DropMobsStat