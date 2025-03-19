function solution(n) {
    var answer = 0;
    // n의 약수를 모두 더한 값 리턴
    for (var i = 1; i <= n; i++) {
        res = n % i;
        console.log(res);
        if (res === 0) {
            console.log(res);
            // answer += i;
        }
    }
    answer += 1;

    return answer;
}

console.log(solution(12));