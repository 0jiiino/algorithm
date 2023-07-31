function solution(num) {
    if (num === 1) return 0;
    
    let sum = 0;
    let tempNum = num;
    
    while (tempNum !== 1) {
        if (sum === 500) return -1;
        
        if (tempNum % 2 === 0) {
            tempNum = tempNum / 2;
            sum += 1;
            
            continue;
        }
        
        if (tempNum % 2 === 1) {
            tempNum = (tempNum * 3) + 1;
            sum += 1;
            
            continue;
        }
    }
    
    return sum;
}