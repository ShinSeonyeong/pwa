// 피자 나눠먹기(2)
// 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
// 최소 몇 판을 시켜야 하는지

function solution(n) {
  var answer = 0;
  var pizza = 6;

  while (pizza % n !== 0) {
    pizza += 6;
    answer++;
  }
  return answer + 1;
}

console.log(solution(4));
