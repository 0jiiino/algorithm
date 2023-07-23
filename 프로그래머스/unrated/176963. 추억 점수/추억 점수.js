function solution(name, yearning, photo) {
    const answer = [];
    
    // NOTE: 이름 - 추억점수 맵핑해서 새로운 obj 생성
    const yearningObj = {};

    for(let i = 0; i < name.length; i++) {
        yearningObj[name[i]] = yearning[i];
    }
    
    // NOTE: 본격적으로 계산
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        
        for (let j = 0; j < photo[i].length; j++) {
            if (yearningObj.hasOwnProperty(photo[i][j])) {
                   sum += yearningObj[photo[i][j]];
            }
        }
        
        answer.push(sum);
    }
    
    
    return answer;
}