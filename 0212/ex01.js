// 프로그래머스
// 최댓값 구하기: 최댓값과 그다음으로 큰 수 곱셈
function solution(numbers) {

    var max_one = numbers[0];
    var max_two = numbers[1];

    for (var i = 0; i < numbers.length; i++) {
        if (max_one < numbers[i]) {
            max_two = max_one;
            max_one = numbers[i];
            console.log(`max_one = ${max_one}`);
            console.log(`numbers[i] =${numbers[i]}`);
        }
        if (max_two < numbers[i] && max_one > numbers[i]) {
            max_two = numbers[i];
            console.log(`max_two = ${max_two}`);
            console.log(`numbers[i] =${numbers[i]}`);
        }
    }
    console.log(`max_one = ${max_one}`);
    console.log(`max_two = ${max_two}`);
    return max_one * max_two;
}

const ret = solution([30, 32, 110, 70, 40, 250, 200]);
console.log(ret);