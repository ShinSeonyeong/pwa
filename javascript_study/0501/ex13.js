// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return

function solution(my_string, num1, num2) {
  var answer = my_string;
  var str1 = my_string[num1];
  var str2 = my_string[num2];
  console.log(str1);
  console.log(str2);

}

solution("hello", 1, 2);
