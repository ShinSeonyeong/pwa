var score = 80;
console.log(score);

score = 90;
console.log(score);

function solution(age) {
    var year = 1983;
    var age = 2022 - 1983 + 1;
    return `2022년 기준 ${age}살이므로 ${year}년생입니다.`;
}

console.log(`${solution}`);

const result = solution(10);
console.log(result);