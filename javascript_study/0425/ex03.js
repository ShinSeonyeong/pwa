function solution(my_string) {
  var answer = "";
  for (var i = 0; i < my_string.length; i++) {
    answer +=
      my_string[i] === my_string[i].toLowerCase()
        ? my_string[i].toUpperCase()
        : my_string[i].toLowerCase();
  }
  console.log(answer);
  return answer;
}

solution("abCdEfghIJ");

// solution("abCdEfghIJ");