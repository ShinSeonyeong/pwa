// 프로그래머스: 배열의 유사도
var count = 0;
function solution(s1, s2) {
    for(var i = 0; i < s1.length; i++){
        // console.log(`s1[i] ${s1[i]} ${i}`);
        for(var j = 0; j < s2.length; j++){
            // console.log(`s2[j] ${s2[j]} ${j}`);
            if(s1[i] === s2[j]){
                count++;
                // console.log(count);
                // console.log(`s1[i] if문 s2[j] ${s1[i]} ${s2[j]}`);
            }
        }
    }
    console.log(count);
    return count;
}

const res = solution(["a", "b", "c"],["com", "b", "d", "p", "c"]);
console.log(res);