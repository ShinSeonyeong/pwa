function solution(numbers, num1, num2) {
    var answer = [];
    for (var i = 0; i < numbers.length; i++) {
        answer = numbers.slice(num1, num2 + 1);

    }
    return answer;
}

const res = solution([1, 3, 5], 1, 2);
console.log(res);