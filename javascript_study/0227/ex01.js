// 프로그래머스: 모음제거, a, e, i, o, u 제거
function solution(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === 'a') {}
        else if(my_string[i] === 'e'){}
        else if(my_string[i] === 'i'){}
        else if(my_string[i] === 'o'){}
        else if(my_string[i] === 'u'){}
        else {
            answer = answer + my_string[i];
        }
    }
    return answer;
}

const value = solution("nice to meet you");
console.log(value);

// 결과출력
// "bus"	"bs"
// "nice to meet you"	"nc t mt y"