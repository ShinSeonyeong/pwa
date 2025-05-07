function solution(a, b) {
  var sum = Number(a.toString() + b.toString());
  var mult = 2 * a * b;
  if (sum > mult || sum == mult) return sum;
  else if (sum < mult) return mult;
  else return mult;
}

console.log(solution(91, 2));
