const http = require("http");

http
  .createServer((req, res) => {
    console.log('암호화된 password')
    console.log(req.url, req.headers.cookie);
    res.end("Hello");
  })
  .listen(8003, () => {
    console.log("8083포트로 실행되었습니다.");
  });
