// n의 약수를 오름차순으로 담은 배열을 return
function solution(n) {
  let answer;
  let result = [];
  for (let i = 0; i <= n; i++) {
    answer = n % i;
    // console.log(`n = ${n}, i=${i}, answer = ${answer}`);
    if (answer == 0) {
      console.log(i);
      result.push(i);
      console.log(result);
    }
  }
  return result;
}

solution(24);
