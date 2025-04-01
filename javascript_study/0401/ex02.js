// 문자열 정렬하기
function solution(my_string) {
    var regex = /[^0-9]/g;
    var answer = my_string.replace(regex, "");
    // var res = [];
    console.log(answer);
    var result = [...answer].sort((a, b) => a.localeCompare(b));

    return Number(result);
}

solution("p2o4i8gj2");