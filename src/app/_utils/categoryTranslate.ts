export const categoryTranslate = (category: string) => {
    switch(category){
        case "One-Handed Sword": category = "한손검"
        break;
        case "Two-Handed Sword": category = "두손검"
        break;
        case "One-Handed Blunt Weapon": category = "한손둔기"
        break;
        case "Two-Handed Blunt": category = "두손둔기"
        break;
        case "One-Handed Axe" : category = "한손도끼"
        break;
        case "Two-Handed Axe" : category = "두손도끼"
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
        break;
        case "Shoes": category = "신발"
        break;
        case "Top" : category = "상의"
        break;
        case "Bottom" : category = "하의"
        break;
        case "Earrings" : category = "귀고리"
        break;
        case "Overall" : category = "전신"
        break;
        case "Glove" : category = "장갑"
        break;
        case "Cape" : category = "망토"
        break;
        case "Shield": category = "방패"
        break;
    }
    return category
}