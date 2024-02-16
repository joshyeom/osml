export interface MobsThatDropTheItemProps{
    dropChance: string
    drops:{
        every: string;
        in: string
    }
    mobMeta:{
        accuracy: number,
        accuracyRequiredToHit: number,
        evasion: number,
        exp: number,
        hpRecovery: number,
        isBodyAttack: boolean,
        isUndead: boolean,
        level: number
        magicDamage: number
        magicDefense: number
        maxHP: number
        maxMP: number
        minimumPushDamage: number
        physicalDamage: number
        physicalDefense: number
        speed: number
        summonType: number
    }
    mobName: string
}[]