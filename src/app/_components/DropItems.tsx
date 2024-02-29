import { ItemProps } from "../types/ItemProps"
import MobMeta from "./MobMeta"
import { MobInfoProps } from "../types/MobInfoProps"

interface DropItemsProps {
    mobMeta: MobInfoProps["mobInfo"][0]["mobMeta"]
    mobName: MobInfoProps["mobInfo"][0]["mobName"]
    mobDescription: MobInfoProps["mobInfo"][0]["mobDescription"]
    elemental: string
    mobImage: string
}

const DropItems = ({ mobMeta, mobName, mobDescription, elemental, mobImage}: DropItemsProps) => {
    return (
            <section className="row-span-10 col-span-3 border-solid border-x-[1px] border-slate-600">
                <header className="w-full bg-[#2B2B2B] h-[80px] text-xl text-white text-center flex justify-center items-center">
                    <h2 className="font-semibold">몹</h2>
                </header>
                    <article className="row-span-10 col-span-2 flex flex-col items-center pt-5">
                    <section className="w-[300px] bg-gray-700 flex flex-col items-center p-[10px] bg-[#222222]">
                            {mobMeta && mobName && mobDescription && elemental && mobMeta ? 
                                    <MobMeta mobName={mobName} mobImage={mobImage} mobDescription={mobDescription} mobMeta={mobMeta} elemental={elemental}/>
                            : null}
                    </section>
                </article>
            </section>
            )
        }

export default DropItems