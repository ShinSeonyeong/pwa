function solution(order) {
  var answer = 0;
  var orderStr = order.toString();
  for (var i = 0; i < orderStr.length; i++) {
    if (orderStr[i] === "3" || orderStr[i] === "6" || orderStr[i] === "9") {
      answer++;
    }
  }
  return answer;
}

console.log(solution(3));
console.log(solution(29423));
