function solution(money) {
    var drink = parseInt(money / 5500);
    var change = money % 5500;
    // console.log(parseInt(drink));
    // console.log(parseInt(change));
    const str = String(drink)
    const str2 = String(change)
    const answer = Array.from(str, str2)
    console.log
    return answer;
}

var answer = solution(15000);
// solution(15000);
console.log(answer);
// function solution(n, k) {
//     var total = 0;
//     var sheep = n * 12000;
//     var drink = k * 2000;
//     total = sheep + drink;
//     total = total - (parseInt(n/10) * 2000);
//     return total;
// }