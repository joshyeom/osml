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
            }[],
            mobInfo: {
                mobId: string,
                mobName: string,
                mobDescription: string,
                mobMeta: {
                    isBodyAttack: boolean,
                    level: number,
                    maxHP: number,
                    maxMP: number,
                    speed: number,
                    physicalDamage: number,
                    physicalDefense: number,
                    magicDamage: number,
                    magicDefense: number,
                    accuracy: number,
                    evasion: number,
                    exp: number,
                    isUndead: boolean,
                    minimumPushDamage: number,
                    elementalAttributes: string,
                    summonType: number,
                    accuracyRequiredToHit: number
                  },
                  drops: {
                      money: {
                          amount: number,
                          itemId: number,
                          dropChance: string,
                          drops: {
                            every: number,
                            in: number
                          }
                      }[],
                      items: {
                          itemName: string,
                          itemDescription: string,
                          itemTypeInfo:{
                              overallCategory: string
                              subCategory: string
                          }
                          itemMeta:{
                              chair: {
                                  reqLevel: number
                              },
                              equip: StatsApi
                              shop: {
                                  price: number
                              }
                          },
                          dropChance: string,
                          drops: {
                              every: number,
                              in: number
                          }
                      }[]
                  }
            }[],
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