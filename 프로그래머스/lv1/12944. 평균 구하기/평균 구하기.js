function solution(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue,
  0) / arr.length;
}