import Search from "@/app/_components/Search";
import ItemPage from "../../../_components/ItemPage";
import { getList } from "@/app/api/getList";


const Itempage = async () => {
    const data = await getList()
    return (
        <main className="w-[1620px] flex flex-col items-center">
            <Search position={"absolute"} width={"w-[280px]"} data={data}></Search>
            <ItemPage data={data}></ItemPage>
        </main>
    )
}


export default Itempage