// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// y_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return
function solution(my_string, num1, num2) {
    var answer = '';
    var temp = my_string[num1];
    var str1 = my_string[num2];
    var str2 = temp;
    for (let i = 0; i < my_string.length; i++) {
        if (i === num1) {
            answer += str1;
            console.log(answer);
        } else if (i === num2) {
            answer += str2;
            console.log(answer);
        } else {
            answer += my_string[i];
            console.log(answer);
        }
    }
    return answer;
}

console.log(solution("I love you", 3, 6))