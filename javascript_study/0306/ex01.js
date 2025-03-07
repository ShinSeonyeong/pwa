function solution(my_str, n) {
    console.log(my_str.substring(0, n));
    console.log(my_str.substring(n, n + n));
    console.log(my_str.substring(n + n, n + n + n));

    var answer = [];
    let left = 0;
    let right = n;
    while (true) {
        const result = my_str.substring(left, right);
        if (result.length < 1) { // 길이가 0이면 brek, while문 나감. 
            break;
        } else {
            answer.push(result);
        }
        left = left + n;
        right = right + n;
    }
    return answer;
}

solution("abcdef123", 6)