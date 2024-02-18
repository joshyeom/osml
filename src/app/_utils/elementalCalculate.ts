interface Code{
    [key: string]: string;
}

export const elementalCalculate = (elemental: string) => {
    if(elemental === undefined){
        return
    }
    const codes: Code = {
        F: "불",
        I: "얼음",
        H: "성",
        L: "전기",
    };
    const strength = []
    const weakness = []

    for(let i = 0 ; i < elemental.length ; i+= 2){
        const sliced = elemental.slice(i, i + 2)
        if(sliced[1] === "3"){
            weakness.push(codes[sliced[0]])
        }else{
            strength.push(codes[sliced[0]])
        }
    }
    
    let str
    if(strength.length > 0 && weakness.length > 0){
        str = `${weakness.flat()} 약점 ${strength.flat()} 반감`
    }else if(strength.length > 0 && weakness.length === 0){
        str = `${strength.flat()} 반감`
    }else if(strength.length === 0 && weakness.length > 0){
        str = `${weakness.flat()} 약점`
    }
    return str
}