require("dotenv").config();

const cors = require("cors");
const pool = require("./db.js");
const express = require("express"); // npm i로 설치한 모듈, 노드모듈에 있는 express 가지고 오는 것
const path = require("path"); // 경로 관리 모듈
const morgan = require("morgan"); // 기록 남기는 모듈
const cookieParser = require("cookie-parser");

const app = express(); // app express 객체생성

app.use(cors());

// app.use(morgan("combined")); // dev: 개발단계에서 사용, combined: 실제 운영배포에서 사용

// public 폴더에 해당하는 파일이 있으면 클라이언트한테 준다.
// "/": 클라이언트가 접속하는 방법 설정
// 만약 "/aaa"로 되어 있으면 http://localhost:8080/aaa/pepe04.jpg 이렇게 요청해야 함.
app.use("/", express.static(path.join(__dirname, "public")));

// req.body의 파라메타를 받아줌. {id:"aaa@naver.com"} 이런식으로 받아옴.
app.use(express.json()); // 이걸 해줘야 req.body 내용이 달림.
// req.query의 ?aa=10 이런식으로 받아옴.
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
  //   console.log(req.body); // req.body => { name: "홍길동" }
  //   console.log(req.query); // req.query => localhost:8080?aa=10&b=20
  console.log("모든 요청은 이곳을 거친다.");
  next(); // 다음 미들웨어로 넘어간다.
});

app.get("/setCoo", (req, res, next) => {
  console.log("test");
  res.cookie("haha", "hoho", {
    expires: new Date(Date.now() + 1000 * 60), // 1min 동안 유효
    httpOnly: true,
    secure: true,
    signed: true,
  });
  res.send("여기서 쿠키발급");
});

app.get("/getCoo", (req, res, next) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("저기옴.");
});

// CRUD: Create, Read, Update, Delete
// GET: 데이터 조회 (select)
// next 적어줘도 되고 안 적어도 됨.
app.get(
  "/",
  async (req, res, next) => {
    const conn = await pool.getConnection(); // 연결 객체 가져오기
    const result = await conn.execute("SELECT * FROM users");
    conn.release(); // 연결 객체 반환
    next(); // 다음 미들웨어로 넘어간다.
    res.status(200).json(result[0]); // 클라이언트에게 보내기
    // res.status(200).json({aa:10, bb:20}); // 클라이언트에게 보내기
  },
  (req, res, next) => {
    console.log("다음 미들웨어로 넘어간다.");
    // res.json('json 두 번 쓰면 안된다.')
  }
);

app.get(
  "/users",
  async (req, res, next) => {
    const conn = await pool.getConnection(); // 연결 객체 가져오기
    const result = await conn.execute("SELECT * FROM users limit 3");
    conn.release(); // 연결 객체 반환
    res.status(200).json(result[0]); // 클라이언트에게 보내기
    // res.status(200).json({aa:10, bb:20}); // 클라이언트에게 보내기
  },
);

// POST: 데이터 생성(insert)
app.post("/", async (req, res) => {
  const conn = await pool.getConnection(); // 연결 객체 가져오기
  const result = await conn.execute(`insert into users (id, password) 
                                    values ('${req.body.name}', '${req.body.age}')`);
  conn.release(); // 연결 객체 반환
  res.send(result);
});

// PUT: 데이터 수정(update 테이블명 set 컬럼=?바꿀것, ... where 컬럼=?)
app.put("/", async (req, res) => {
  console.log(req.body);
  const conn = await pool.getConnection();
  const sql = "update users set id=?, password=? where idx=?";
  const result = await conn.execute(sql, [
    req.body.id,
    req.body.password,
    req.body.idx,
  ]);
  //   const result = await conn.execute(
  //     `UPDATE users SET id='${req.body.name}', password='${req.body.password}' WHERE idx='${req.body.idx}'`
  //   );
  conn.release();
  res.send(result);
});

// DELETE: 데이터 삭제
app.delete("/", (req, res) => {
  //   throw new Error("강제 에러 발생"); // 에러 발생
  res.send("Hello Delete!");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

// 모든 에러는 이쪽으로 진행된다.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("에러가 발생하였습니다.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
