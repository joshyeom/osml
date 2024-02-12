import Search from "@/app/_components/Search";
import ItemDetails from "../../../_components/ItemDetails";
import { getList } from "@/app/api/getList";


const Itempage = async () => {
    const items = await getList()
    return (
        <main className="w-1620px h-520px flex flex-col items-center">
            <Search position={"absolute"} items={items}></Search>
            <ItemDetails></ItemDetails>
        </main>
    )
}


export default Itempage