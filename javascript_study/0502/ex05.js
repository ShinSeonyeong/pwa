function solution(number, n, m) {
    var answer = number % n;
    var answer2 = number % m;
    if (answer === 0 && answer2 === 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(solution(55, 10, 5));