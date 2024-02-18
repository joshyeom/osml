export const categoryTranslate = (category: string) => {
    switch(category){
        case "One-Handed Sword": category = "한손 검"
        break;
        case "Two-Handed Sword": category = "두손 검"
        break;
        case "One-Handed Blunt Weapon": category = "한손 둔기"
        break;
        case "Two-Handed Blunt Weapon": category = "두손 둔기"
        break;
        case "One-Handed Axe" : category = "한손 도끼"
        break;
        case "Two-Handed Axe" : category = "두손 도끼"
        break;
        case "Spear": category = "창"
        break;
        case "Bow": category = "활"
        break;
        case "Crossbow": category = "석궁"
        break;
        case "Wand": category = "완드"
        break;
        case "Staff": category = "스태프"
        break;
        case "Claw": category = "아대"
        break;
        case "Dagger": category = "단검"
        break;
        case "Hat": category = "모자"
    }
    return category
}