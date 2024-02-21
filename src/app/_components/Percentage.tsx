import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"

interface PercentageProps{
    mob: MobsThatDropTheItemProps
}


const Percentage = ({mob}: PercentageProps) => {
    return(
        <li key={mob.mobName} className="w-full h-[400px] flex flex-col justify-around items-center py-[30px] border-solid border-b-[1px] border-slate-600">
            <span className="text-5xl">{mob.dropChance}</span>
            <div className="text-5xl">
                <p className="text-center">
                    <span>
                        {mob.drops.every} / {mob.drops.in} <br></br>
                    </span>
                    <span className="text-3xl text-gray-400">확률</span>
                </p>
            </div>
        </li>
    )
}

export default Percentage