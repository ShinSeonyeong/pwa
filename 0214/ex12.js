// 프로그래머스 문자반복 출력

function solution(my_string, n) {
    for (let i = 0; i < my_string.length; i++) {
        for(let y = 1; y <= n; y++){
            console.log(my_string[y]);
        }
        // console.log(i);
        // console.log(my_string[i]);
    }
}

solution("hello", 3);
// hhh eee lll lll ooo