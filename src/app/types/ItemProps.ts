import { StatsApi } from "./StatsApi"
import { MobsThatDropTheItemProps } from "./MobsThatDropTheItemProps"
export interface ItemProps{
    result: {
        exactMatchInfo: {
            itemInfo: {
                itemName: string,
                itemDescription: string,
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
                    overallCategory: string
                    subCategory: string
                }
                mobsThatDropTheItem: MobsThatDropTheItemProps[],
            }[]
        }
        itemInfo: {
            itemName: string,
            itemDescription: string,
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
                overallCategory: string
                subCategory: string
            }
            mobsThatDropTheItem: MobsThatDropTheItemProps[]
        }[]
    }
}