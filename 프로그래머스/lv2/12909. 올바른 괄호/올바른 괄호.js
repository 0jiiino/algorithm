function solution(s){
    if (s[0] === ")") return false;
    
    let openBracket = 0;
    
    for (let i = 0; i < s.length; i++) {
        s[i] === "(" ? openBracket += 1 : openBracket -= 1;
        
        if (openBracket < 0) return false;
    }

    if (openBracket !== 0) return false;
    
    return true;
}