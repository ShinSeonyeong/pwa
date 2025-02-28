// 프로그래머스 중복된 숫자 개수

function solution(array, n) {
    var answer = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (n === element){
            answer ++;
        }
    }
    return answer;
}

const ret = solution([1, 1, 2, 3, 4, 5], 1);
console.log(ret);