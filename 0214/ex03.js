// 프로그래머스 특정 문자 제거
// function solution(my_string, letter) {
//     var answer = '';
//     for (let i = 0; i < my_string.length; i++) {
//         console.log(my_string[i]);
//         if (my_string[i] !== letter)
//             answer = answer + my_string[i];
//     }
//     return answer;
// }


function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] == letter) {
        } else {
            answer = answer + my_string[i];
        }
    }
    return answer;
}

console.log(solution("abcdef", "f"));
// solution("BCBdbe", "B");

// 문자열은 유사배열이다.