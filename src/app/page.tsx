import { getList } from "@/app/api/getList";
import Search from "./_components/Search";

const Home = async () => {
    const items = await getList()
    return <Search position={"static"} width={"w-[720px]"} items={items}></Search>
} 

export default Home