import Search from "@/app/_components/Search";
import MobPage from "../../../_components/MobPage";
import { getList } from "@/app/api/getList";


const MobMain = async () => {
    const data = await getList()
    return (
        <main className="w-[1620px] flex flex-col items-center">
            <Search position={"absolute"} width={"w-[250px]"} data={data}></Search>
            <MobPage data={data}></MobPage>
        </main>
    )
}


export default MobMain