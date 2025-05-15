const pool = require('./db');
console.log(pool);

const http = require("http"); // 웹서버 역할을 해주는 라이브러리
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    console.log(req.url);
    try {
      if (req.url === "/") {
        const password = "비밀번호"; // 숨겨진 데이터
        const indexhtml = await fs.readFile("./index.html", "utf-8"); // index.html 파일을 읽어오는 것
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 문자열이 날아간다는 의미
        return res.end(indexhtml); // fs 라이브러리 사용하기 전 코드: res.end('<html><body><h1>Hi</h1></body></html>\n');
      } else if (req.url === "/join" && req.method === "POST") {
        // 한글이 들어오는 것 맞추기 위해 utf-8로 인코딩
        req.setEncoding("utf8");

        let body = ""; // body 문자열 선언
        // request 요청한 클라이언트 data로 들어오는 것이 있다면
        // data모아서 body에 넣어준다.
        req.on("data", (data) => {
          body += data;
        });
        req.on("end", () => {
          console.log(body); // body 내용 출력
          const { id, password } = JSON.parse(body); // body를 JSON.parse 객체로 변환
          console.log(id, password);

          //   mysql에 저장하는 코드만들예정
        });

        const obj = { name: "홍길동", age: 20 };
        res.writeHead(201, {
          "Content-Type": "application/json; charset=utf-8",
        });
        return res.end(JSON.stringify(obj));
      } else if (req.url === "/login") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        return res.end("로그인 성공");
      }
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("잘못된 경로입니다.");
    } catch (e) {
      console.log(e);
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      res.end(e.message);
    }
  })
  .listen(8080, "0.0.0.0", () => {
    console.log("Server started on port 8080");
  });
