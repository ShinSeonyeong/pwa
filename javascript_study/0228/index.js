const doA = function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        answer.push(element*2);
    }
    return answer;
}

console.log(doA([1, 2, 100, -99, 1, 2, 3]));