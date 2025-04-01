// 문자열 정렬하기
function solution(my_string) {
    var regex = /[^0-9]/g;
    var answer = my_string.replace(regex, "");
    var result = [...answer].sort((a, b) => a.localeCompare(b));
    var result2 = result.map(Number); // 배열안의 값을 숫자로 변경

    return result2;
}

solution("p2o4i8gj2");

    // var result2 = result.join("");
    // for (let i = 0; i < result2.length; i++) {
    //     console.log(result2[i]);
    //     res = res + result2[i];
    // }
    // console.log(res);
    // return res;