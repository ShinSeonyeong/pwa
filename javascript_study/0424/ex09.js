// code의 배수번째 글짜만 출력
// 1. cipher의 길이만큼 반복문을 돌린다.
// 2. cipher의 i번째 글자가 code의 배수번째 글자이면 출력한다.

function solution(cipher, code) {
    var answer = '';
    for (let i = 0; i < cipher.length; i++) {
        // console.log(`i  ${i}`);
        if ((i+1) % code === 0) {
            answer += cipher[i];
            // console.log(`(i+1) % code ${(i+1) % code}`);
            // console.log(`cipher[i] ${cipher[i]}`);
        }
    }
    return answer
}

console.log(solution("pfqallllabwaoclk", 2));
