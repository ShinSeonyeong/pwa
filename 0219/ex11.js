// 프로그래머스 아이스 아메리카노!
// function solution(money) {
//     var drink = parseInt(money / 5500);
//     var change = money % 5500;
//     console.log(parseInt(drink));
//     console.log(parseInt(change));
//     return answer;
// }

// var answer = solution(15000);

// console.log(answer);

function solution(money) {
    var drink = parseInt(money / 5500);
    var change = money % 5500;
    
    answer = [parseInt(drink), change];
    return answer;
}
var answer = solution(15000);
console.log(answer);