import { getDetails } from "@/app/api/getDetails"

export const fetchDetails = async (name: string) => {
    try {
        const data = await getDetails(name);
        return data
    } catch (error) {
        console.error(error);
    }
};