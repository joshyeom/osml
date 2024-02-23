"use client"
import { useParams } from "next/navigation"

const MobPage = ({data}: DataListProps) => {
    const { name } = useParams()
    

    return (
        <section className="w-full mt-[350px] bg-[#2B2B2B]">
            hello Mobpage
        </section>
    )
}

export default MobPage