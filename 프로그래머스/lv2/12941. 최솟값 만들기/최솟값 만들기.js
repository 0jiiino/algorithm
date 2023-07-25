function solution(A,B){
    let sum = 0;
    
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    
    console.log()
    
    return sortedA.reduce((accumulator, currentValue, i) => accumulator + (currentValue * sortedB[i]), 0)
}