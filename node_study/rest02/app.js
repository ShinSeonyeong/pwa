const pool = require("./db.js");
const express = require("express");
const app = express(); // express 호출
const path = require("path");
const morgan = require("morgan");

app.use(morgan("combined")); // morgan 미들웨어 등록

app.use("/", express.static(path.join(__dirname, "public"))); // 정적 파일 제공
// console.log(express.static(path.join(__dirname, 'public')).toString()); // 정적 파일 제공
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("모든 요청은 이곳을 거친다.");
  next(); // 다음 미들웨어로 넘어간다.
});

// CRUD: Create, Read, Update, Delete
// GET: 데이터 조회
// next 적어줘도 됨
app.get(
  "/",
  async (req, res, next) => {
    console.log("req.body");
    console.log(req.body);
    console.log("req.query");
    console.log(req.query);
    console.log(req.query.name);
    console.log(req.query.age);
    const conn = await pool.getConnection(); // 연결 객체 가져오기
    const result = await conn.execute("SELECT * FROM users");
    //   console.log(result[0]); // select 결과출력
    conn.release(); // 연결 객체 반환
    next(); // 다음 미들웨어로 넘어간다.
    res.status(200).json(result[0]); // 클라이언트에게 보내기
  },
  (req, res, next) => {
    console.log("다음 미들웨어로 넘어간다.");
    // res.json('json 두 번 쓰면 안된다.')
  }
);

// POST: 데이터 생성
app.post("/", async (req, res) => {
  const conn = await pool.getConnection(); // 연결 객체 가져오기
  const result = await conn.execute(`insert into users (id, password) 
                                    values ('${req.body.name}', '${req.body.age}')`);
  conn.release(); // 연결 객체 반환
  res.send(result);
});

// PUT: 데이터 수정
app.put("/", (req, res) => {
  res.send("Hello Put!");
});

// DELETE: 데이터 삭제
app.delete("/", (req, res) => {
  throw new Error("강제 에러 발생"); // 에러 발생
  res.send("Hello Delete!");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("에러가 발생하였습니다.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
