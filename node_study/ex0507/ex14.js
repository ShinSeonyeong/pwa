function solution(box, n) {
  var answer = 1;
  var result = 1;
  for (let i = 0; i < box.length; i++) {
    answer = box[i] / n;
    console.log(answer);
  }
  result *= answer;
  console.log("result" + result);
  console.log(result);
}

solution([10, 8, 6], 1);
