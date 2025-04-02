// 숨어있는 숫자의 덧셈
function solution(my_string) {
  var regex = /[^0-9]/g;
  var answer = my_string.replace(regex, "");
  console.log(answer);
  var result = 0;
  // console.log(typeof(answer));

  for (let i = 0; i < answer.length; i++) {
    result += Number(answer[i]);
  }
  
  console.log(result);
}

solution("1a2b3c4d123");
