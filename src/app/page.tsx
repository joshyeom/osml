import { getList } from "@/app/api/getList";
import Search from "./_components/Search";

const Home = async () => {
    const items = await getList()
    return <Search position={"static"} items={items}></Search>
} 

export default Home