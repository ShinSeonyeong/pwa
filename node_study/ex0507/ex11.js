function solution(my_string, n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(my_string[i]);
  }
  return answer.join("");
}

solution("ProgrammerS123", 11);
