// 제곱수 판벌
function solution(n) {
   var answer = Math.sqrt(n);
   var result = Number.isInteger(answer) ? 1 : 2;
   console.log(result);
   return result;
}

solution(144);
solution(976);