// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return

function solution(numbers) {
  let answer = 0;
  let res = 0;
  for (let j = 0; j < 10; j++) {
    res = res + j;
  }
  // console.log(res);

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    // console.log(answer);
  }
  console.log(res - answer);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
