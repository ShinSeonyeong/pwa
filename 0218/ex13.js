// 프로그래머스: 문자열뒤집기
// 1번방법
// function solution(my_string) {
//     var answer = my_string.split("").reverse().join("");
//     console.log(answer);
// }

// solution("jaron");

// 2번방법
function solution(my_string) {
    var answer = '';
    var temp = '';
    for (var i = my_string.length - 1; i >= 0; i--) {
        // console.log(my_string[i]);
        // console.log(i);
        // console.log(my_string.length - 1);
        answer = answer + my_string[i];
    }
    console.log(answer);
    return answer;
}

const res = solution("jaron");
console.log(res);