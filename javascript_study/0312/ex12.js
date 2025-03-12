function solution(n, m) {
    var min_num = 1;

    while (true) {
        if (min_num % n === 0 && min_num % m === 0) {
            break;
        }
        min_num++;
    }

    for (var i = 0; i <= m; i++) {
        if (n % i == 0 && m % i == 0) {
            max_num = i;
        }
    }
    return [max_num, min_num];
}

// 최대공약수
// 3의 약수: 1, 3
// 12의 약수: 1, 2, 3, 4, 6, 12
// 공통적으로 들어가있는 약수: 1, 3
// 3과 12의 최대공약수: 3
console.log(solution(3, 12));