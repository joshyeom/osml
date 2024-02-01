import { getData } from "@/api/getData";
import Search from "./_components/Search";

const Home = async () => {
    const items = await getData()
    return <Search items={items}>Hello</Search>
}

export default Home