import { StatsApi } from "../types/StatsApi";
export interface ItemDetailsProps {
    itemIMG: string;
    REQLEV: number;
    REQST: StatsApi | null;
    itemName: string;
    forSell: number;
    category: string;
}