import Image from "next/image";

export interface UseDetailsProps {
    itemIMG: string;
    itemName: string;
    forSell: number;
    subCategory: string;
}


const UseDetails = ({itemIMG, itemName, forSell, subCategory}: UseDetailsProps) => {
    return(
        <div className="row-span-9 col-span-2 flex flex-col items-center">
                <div className="w-[300px] bg-gray-700 flex flex-col items-center p-[10px] bg-[#222222]">
                    <div className="text-xl mb-[16px] text-white font-semibold">{itemName}</div>
                    <div className="w-full flex mb-[16px] justify-around">
                        <div className="w-[150px] h-[150px] flex justify-center items-center bg-transparent">
                            {itemIMG ? 
                                <Image src={itemIMG} alt={itemName} width={100} height={100}></Image>
                            : null}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default UseDetails