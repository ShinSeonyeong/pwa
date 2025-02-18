// 프로그래머스: 분수의 덧셈
// 기약분수: 약분이 더이상 되지 않는 것
// 1/2 + 3/4 = 5/4
// 10/20 + 5/10 = 30/20 -> 15/10 -> 3/2
function solution(numer1, denom1, numer2, denom2) {
    var answer = [];

    var max = denom1 * denom2;
    var i = 2;
    // 1 <= max, 1부터 max값 사이의 값으로 나눠주는 것
    while (i <= max) {
        if (i % denom1 == 0 && i % denom2 == 0) {
            console.log(i);
            break;
        }
        i++;
    }

    return answer;
}

// solution(1, 2, 3, 4);
solution(10, 20, 5, 10);