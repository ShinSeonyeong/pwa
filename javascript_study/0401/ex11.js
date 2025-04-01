// 문자열 정렬하기
function solution(my_string) {
    var regex = /[^0-9]/g;
    var answer = parseInt(my_string.replace(regex, ""));
    console.log(answer);
    for (let i = 0; i < answer.length; i++) {
        const element = answer[i];
        console.log(element);
    }
}

solution("aAb1B2cC34oOp");

// var result = [...answer].sort((a, b) => a.localeCompare(b));
// var result2 = result.join("");
// for (let i = 0; i < result2.length; i++) {
//     console.log(result2[i]);
//     res = res + result2[i];
// }
// console.log(res);
// return res;