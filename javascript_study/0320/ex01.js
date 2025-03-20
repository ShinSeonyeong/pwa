// 소수 찾기, 1과 자기자신으로만 나눠지는 수
// 2, 3은 무조건 소수
// i가 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,,, 일 때 소수

/*
const result = Math.sqrt(4);
console.log(result); // 2
*/

function solution(n) {
    let count = 0;

    const 소수s = [];
    for (let i = 2; i <= n; i++) {
        if (i == 2) { 소수s.push(i); count++; continue; }
        if (i == 3) { 소수s.push(i); count++; continue; }
        
        let 소수판별 = true;
        const sqri = Math.sqrt(i);

        for (let j = 0; j < 소수s.length; j++) {
            if (j > sqri) break; // 제곱근 이상이면 확인할 필요 없음. 

            if (i % 소수s[j] === 0) {
                소수판별 = false;
                break;
            }
        }
        if (소수판별) {
            소수s.push(i);
            count++;
        }
    }
    return count;
}

console.log(solution(25));