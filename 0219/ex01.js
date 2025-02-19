// 프로그래머스: 문자열 뒤집기
function solution(str) {
    var answer = "";
    for (let i = str.length - 1; i > -1; i--) {
        console.log(str[i]);
        answer = answer + str[i];
    }
    return answer;
}

console.log(solution("jarodffdddccgn"));