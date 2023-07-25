function solution(s) {
    let totalChangeCount = 0;
    let deletedZeroCount = 0;
    
    let sequence = s;
    
    while (sequence.length !== 1) {
        totalChangeCount += 1;
        
        const array = sequence.split("").filter(num => num !== "0");
        deletedZeroCount += sequence.length - array.length;
        
        sequence = (array.length).toString(2);
    }
    
    return [totalChangeCount, deletedZeroCount];
}