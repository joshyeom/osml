import { StatsApi } from "./StatsApi"
import { MobsThatDropTheItemProps } from "./MobsThatDropTheItemProps"
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
                mobsThatDropTheItem: MobsThatDropTheItemProps[]
            }[]
        }
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
            mobsThatDropTheItem: MobsThatDropTheItemProps[]
        }[]
    }
}