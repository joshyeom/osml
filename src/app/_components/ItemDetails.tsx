"use client"
import { useParams } from "next/navigation"
import { getDetails } from "@/app/api/getDetails"
import { useEffect } from "react"
import { ItemDetailsProps } from "../types/ItemDetailsProps"


const ItemDetails: React.FC<ItemDetailsProps> = () => {
    const params = useParams()
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                if(typeof params.name !== "string"){
                    return
                }
                const details = await getDetails(params.name);
                console.log(details)
            } catch (error) {
                console.error(error);
            }
        };
        fetchDetails();
    }, [params.name]);
    return (
        <section className="w-full flex flex-col items-center mt-14">
            <header className="w-full bg-white">
                <div>아이템 이름</div>
                <div>이미지</div>
            </header>
        </section>
    )
}

export default ItemDetails