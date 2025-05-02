const http = require("http");
// env안에 있는 변수를 가지고 와서 process.env 객체안에 프로퍼티로 추가함.
require("dotenv").config();

console.log(process.env.PWD); // 기본 제공
console.log(process.env.password); // dotenv config() 함수 호출해야 추가됨

http
  .createServer((req, res) => {
    console.log("암호화된 password");
    console.log(req.url, req.headers.cookie);
    res.end("<html><head><body>123</body></head></html>");
  })
  .listen(8003, () => {
    console.log("8083포트로 실행되었습니다.");
  });
