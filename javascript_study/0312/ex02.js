// 프로그래머스 - 문자열 다루기
// 문자열 길이는 4 또는 6
// 숫자만 있으면 true, 아니면 false
function solution(s) {
    // \d: 숫자로만 이루어져 있는지
    // \s: 공백이 들어가있는지
    const re = /^[0-9]+$/;
    return re.test(s) && (s.length == 4 || s.length == 6);
}

console.log(solution('1234'));
console.log(solution('12345678'));
console.log(solution('ds1234'));