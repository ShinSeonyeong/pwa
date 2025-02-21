// 프로그래머스 배열의 평균값
function solution(numbers) {
    var answer = 0;
    var count = 0;
    for(var i = 0; i < numbers.length; i++){
        answer = answer + numbers[i];
        count ++;
    }
    console.log(answer);
    console.log(count);
    return answer/count;
}
var res = solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
console.log(res);