import Search from "@/app/_components/Search";
import ItemDetails from "../../../_components/ItemDetails";
import { getList } from "@/app/api/getList";


const Itempage = async () => {
    const data = await getList()
    return (
        <main className="w-[1620px] flex flex-col items-center">
            <Search position={"absolute"} width={"w-[280px]"} data={data}></Search>
            <ItemDetails data={data}></ItemDetails>
        </main>
    )
}


export default Itempage