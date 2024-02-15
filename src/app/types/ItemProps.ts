import { StatsApi } from "./StatsApi"

export interface ItemProps{
    result: {
        exactMatchInfo: {
            itemInfo: {
                itemName: string,
                itemMeta:{
                    chair: {
                        reqLevel: number
                    },
                    equip: StatsApi
                    shop: {
                        price: number
                    }
                }
                itemTypeInfo:{
                    subCategory: string
                }
            }[]
        }
    }
}