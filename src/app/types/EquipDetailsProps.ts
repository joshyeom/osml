import { StatsApi } from "./StatsApi";
export interface EquipDetailsProps {
    itemIMG: string;
    REQLEV: number;
    REQST: StatsApi | null;
    itemName: string;
    forSell: number;
    subCategory: string;
}