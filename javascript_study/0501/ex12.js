// 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return
function solution(num_list) {
  let mult_num = 1;
  let sum_num = 0;

  for (let i = 0; i < num_list.length; i++) {
    mult_num *= num_list[i];
    sum_num += num_list[i];
     
  }
  console.log(mult_num);
  console.log(sum_num*sum_num);

  if (mult_num < (sum_num*sum_num)) return 1;
  else return 0;
}

console.log(solution([3, 4, 5, 2, 1]));
