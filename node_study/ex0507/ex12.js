function solution(num_list, n) {
    var answer = []
  for (let i = n - 1; i < num_list.length; i++) {
    const element = num_list[i];
    console.log(element);
    answer.push(element)
  }
  console.log(answer);
  return answer;
}

solution([5, 2, 1, 7, 5], 2);
