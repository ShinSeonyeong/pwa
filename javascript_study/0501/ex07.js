// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return
function solution(array) {
  console.log(Math.max(...array));
  console.log(array.indexOf(Math.max(...array)));
}

solution([1, 8, 3]);
