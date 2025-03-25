// n의 배수 판별
function solution(num, n) {
    var answer = num % n;
    if (answer == 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(solution(34, 3));