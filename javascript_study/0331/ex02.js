function solution(my_string) {
    var regex = /[^0-9]/g;
    var answer = my_string.replace(regex, "");
    var result = Object.entries(answer).sort((a, b) => a - b);
    console.log(result);
    // return answer;
}

solution("hi12392");