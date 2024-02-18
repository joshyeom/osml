import { MobsThatDropTheItemProps } from "../types/MobsThatDropTheItemProps"

interface PercentageProps{
    mob: MobsThatDropTheItemProps
}


const Percentage = ({mob}: PercentageProps) => {
    return(
        <li key={mob.mobName} className="w-full h-[300px] flex flex-col justify-around items-center mb-[100px]">
            <div className="text-5xl">{mob.dropChance}</div>
            <div className="text-5xl">
                <p className="text-center">
                    {mob.drops.every} / {mob.drops.in} <br></br>
                    확률
                </p>
            </div>
        </li>
    )
}

export default Percentage