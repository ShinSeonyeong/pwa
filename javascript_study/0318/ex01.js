function solution(m, n) {
    var answer = [];

    const max = m > n ? m : n;
    for (let i = 1; i <= max; i++) {
        if (m % i == 0 && n % i == 0) {
            answer[0] = i;
            console.log(i);
        }
    }

    answer[1] = (m * n) / answer[0];

    return answer;
}

console.log(solution(3, 12));