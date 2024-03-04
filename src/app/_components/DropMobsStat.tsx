import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"

interface DropMobsStatProps{
    mob: MobsThatDropTheItemProps
    elemental: string
}

const DropMobsStat = ({mob, elemental}: DropMobsStatProps) => {
    return(
        <li key={mob.mobName} className="w-full h-[400px] py-[40px] flex flex-col justify-around items-center border-solid border-b-[1px] border-r-[1px] border-slate-600">
            <div className="w-4/6 flex justify-between max-lg:flex-col max-lg:h-[90px]">
                <div className="w-3/6 max-lg:flex-col max-lg:w-full bg-gray-800 p-[10px] text-center rounded bg-[#222222] max-sm:text-xs">요구 명중률 <span className="text-gray-400">{mob.mobMeta.accuracyRequiredToHit}</span></div>
                <div className="w-2/6 max-lg:flex-col max-lg:w-full bg-gray-800 p-[10px] text-center rounded bg-[#222222] max-sm:text-xs">회피율 <span className="text-gray-400">{mob.mobMeta.accuracy}</span></div>
            </div>
            <div className="w-4/6 text-center bg-gray-800 py-[10px] rounded bg-[#222222] max-sm:text-sm">넉백 최소 데미지 <span className="text-gray-400">{mob.mobMeta.minimumPushDamage}</span></div>
            <div className="w-4/6 text-center bg-gray-800 py-[10px] rounded bg-[#222222] max-sm:text-sm">물리 방어력  <span className="text-gray-400">{mob.mobMeta.physicalDefense}</span></div>
            <div className="w-4/6 text-center bg-gray-800 py-[10px] rounded bg-[#222222] max-sm:text-sm">마법 방어력 <span className="text-gray-400">{mob.mobMeta.magicDefense}</span></div>
            <div className="w-4/6 text-center bg-gray-800 py-[10px] rounded bg-[#222222] max-sm:text-sm">{elemental}</div>
        </li>
    )
}

export default DropMobsStat