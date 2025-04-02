// 최댓값 만들기 (2)
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i != j) {
        // console.log(`i= ${numbers[i]}`);
        // console.log(`j= ${numbers[j]}`);
        answer = numbers[i] * numbers[j];
        if (Math.sign(answer) == 1) {
          var result = Math.max(answer);
        }
      }
    }
  }
}

solution([0, -31, 24, 10, 1, 9]);
