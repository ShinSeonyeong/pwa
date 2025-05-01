function solution(n) {
  let even_num;
  let odd_num;
  let answer = 0;
  if (n % 2 == 0) {
    for (let i = 0; i <= n; i++) {
        even_num = i % 2;
        if (even_num == 0) {
          answer += i ** 2;
        }
      }
  } else {
    for (let i = 0; i <= n; i++) {
      odd_num = i % 2;
      if (odd_num == 1) {
        answer += i;
      }
    }
  }
  console.log(answer);
}

solution(7);
