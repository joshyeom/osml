import Image from "next/image"
import { MobInfoProps } from "../types/MobInfoProps"


interface mobMetaProps{
        mobMeta: MobInfoProps["mobInfo"][0]["mobMeta"]
        mobName: string
        mobImage: string
        mobDescription: string
        elemental: string
}

const MobMeta = ({mobName, mobImage, mobDescription, mobMeta, elemental}: mobMetaProps) => {
    return(
        <>
            <header className="text-xl mb-[16px] text-white font-semibold">{mobName} <span className="text-gray-400">Lv. {mobMeta?.level}</span></header>
                <div className="w-full flex flex-col mb-[16px] justify-around">
                    <figure className="w-full h-[150px] flex justify-center items-center bg-transparent">
                        {mobImage && mobName ? 
                            <Image src={mobImage} alt={mobName} width={150} height={150}></Image>
                        : null}
                    </figure>
                    <article className="w-full flex justify-center">
                        {mobDescription ?
                            <p className="w-[250px] flex justify-center items-center mb-3 text-gray-400">
                                {mobDescription}
                            </p>
                        :null}
                    </article>
                </div>
            {mobMeta ? 
            <section className="h-[400px] py-[20px] flex flex-col justify-around items-center border-solid border-slate-600">
                    <div className="w-[250px] flex h-[30px] justify-between">
                        <div className="w-[122px] bg-red-500 flex justify-center items-center rounded">HP {mobMeta.maxHP}</div>
                        <div className="w-[122px] bg-blue-500 flex justify-center items-center rounded">MP {mobMeta.maxMP}</div>
                    </div>
                    <div  className="w-[250px] h-[30px] bg-green-500 flex justify-center items-center rounded">EXP {mobMeta.exp}</div>
                    <div className="h-[30px]"></div>
                    <div className="w-[250px] flex justify-between">
                        <div className="bg-gray-800 p-[10px] text-center rounded bg-[#222222]">요구 명중률 {mobMeta.accuracyRequiredToHit}</div>
                        <div className="bg-gray-800 w-[115px] text-center p-[10px] rounded bg-[#222222]">회피율 {mobMeta.accuracy}</div>
                    </div>
                    <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">넉백 최소 데미지 <span className="text-gray-400">{mobMeta.minimumPushDamage}</span></div>
                    <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">물리 방어력  <span className="text-gray-400">{mobMeta.physicalDefense}</span></div>
                    <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">마법 방어력 <span className="text-gray-400">{mobMeta.magicDefense}</span></div>
                    <div className="w-[250px] text-center bg-gray-800 py-[10px] rounded bg-[#222222]">{elemental}</div>
            </section>
            : null}
        </>

    )
}

export default MobMeta