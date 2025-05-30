const pool = require('./db');

const http = require("http"); // 웹서버 역할을 해주는 라이브러리
const fs = require("fs").promises;

http
    .createServer(async (req, res) => {
        console.log(req.url);
        try {
            if (req.url === "/") {
                const password = "비밀번호"; // 숨겨진 데이터
                const indexhtml = await fs.readFile("./index.html", "utf-8"); // index.html 파일을 읽어오는 것
                res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); // 문자열이 날아간다는 의미
                return res.end(indexhtml); // fs 라이브러리 사용하기 전 코드: res.end('<html><body><h1>Hi</h1></body></html>\n');
            } else if (req.url.includes('/select')) {
                const conn = await pool.getConnection();
                const sql = 'SELECT * FROM users'; // select 구문
                const [result] = await conn.execute(sql); // sql문 실행
                conn.release(); // pool 반환
                console.log(result);
                res.writeHead(200, {"Content-Type": "application/json; charset=utf-8"});
                return res.end(JSON.stringify(result)); // 결과를 JSON으로 변환하여 전송함.
            } else if (req.url === "/join" && req.method === "POST") {
                // 한글이 들어오는 것 맞추기 위해 utf-8로 인코딩
                req.setEncoding("utf8");

                let body = ""; // body 문자열 선언
                // request 요청한 클라이언트 data로 들어오는 것이 있다면
                // data모아서 body에 넣어준다.
                req.on("data", (data) => {
                    body += data;
                });
                req.on("end", async () => {
                    console.log(body); // body 내용 출력
                    const {id, password} = JSON.parse(body); // body를 JSON.parse 객체로 변환
                    console.log(id, password);

                    //   mysql에 저장하는 코드
                    const conn = await pool.getConnection(); // pool에서 connection을 가져옴
                    const sql = 'INSERT INTO users (id, password) VALUES (?, ?)'; // sql문 설정
                    const [result] = await conn.execute(sql, [id, password]); // sql문 실행
                    conn.release(); // pool 반환

                    console.log(result); // 결과 출력
                });
                // writeHead 메서드는 응답 헤더를 설정하는 메서드
                res.writeHead(201, {
                    "Content-Type": "application/json; charset=utf-8",
                });
                // res.end() 메서드는 응답 본문을 설정하는 메서드
                return res.end(JSON.stringify({message: '회원가입 성공'}));
            } else if (req.url === "/login") {
                res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
                return res.end("로그인 성공");
            }
            res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
            return res.end("잘못된 경로입니다.");
        } catch (e) {
            console.log(e);
            res.writeHead(500, {"Content-Type": "text/html; charset=utf-8"});
            res.end(e.message);
        }
    })
    .listen(8080, "0.0.0.0", () => {
        console.log("Server started on port 8080");
    });
