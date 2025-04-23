// "*"의 높이와 너비를 1이라고 했을 때, 
// "*"을 이용해 직각 이등변 삼각형 그리기
// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성
// 코테 - * 직삼각형 출력
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
    for(let i = 1; i <= input; i++){
        console.log('*'.repeat(i));
    }
});

