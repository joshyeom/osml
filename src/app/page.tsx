import { getList } from "@/app/api/getList";
import Search from "./_components/Search";

const Home = async () => {
    const data = await getList()
    return <Search position={"static"} width={"w-[720px]"} data={data}></Search>
} 

export default Home