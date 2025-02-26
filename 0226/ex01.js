// 프로그래머스: n의 배수 고르기

function solution(n, numlist) {
    // console.log(n);
    // console.log(numlist);
    // for (const elem in numlist) {
    //     console.log(elem);
    // }
    var answer = [];
    var count = 0;
    for (let i = 0; i < numlist.length; i++) {
        // console.log(numlist[i]);
        //numlist[i]의 값이 n의 배수일 때
        if (numlist[i] % n == 0) {
            // console.log(numlist[i]);
            // answer[count] = numlist[i];
            // count++;
            answer.push(numlist[i]);
        }
    }
    return answer;
}

const value = solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])
console.log(value);