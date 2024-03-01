interface DropItemPercentageProps{
    itemName: string
    dropChance: string,
    drops: {
        every: number,
        in: number
    }
}

const DropItemPercentage = ({itemName, dropChance, drops}: DropItemPercentageProps) => {
    return (
        <li key={itemName} className="w-full h-[400px] flex flex-col justify-around items-center py-[30px] border-solid border-b-[1px] border-slate-600">
            <span className="text-5xl">{dropChance}</span>
            <div className="text-5xl">
                <p className="text-center">
                    <span>
                        {drops.every} / {drops.in} <br></br>
                    </span>
                    <span className="text-3xl text-gray-400">확률</span>
                </p>
            </div>
        </li>
    )
}

export default DropItemPercentage