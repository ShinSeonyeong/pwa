const express = require("express");
const path = require("path");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const cors = require("cors");

// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

// console.log(process.env.AA);
// console.log(process.env.BB);

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// 로그남기기
app.use(morgan("combined"));
// public에 있는 것 요청했을 경우 응답
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json()); //req.body확인
app.use(express.urlencoded({ extended: false })); //req.query확인
app.use(cookieParser(process.env.COOKIE_SECRET));
// cookieParser 미들웨어 등록 후에 expressSession 호출하는게 안전하다.
app.use(
  expressSession({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.set("port", 3000);

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.send("login전송");
});

app.post("/setSession", (req, res, next) => {
  req.session.userName = "홍길동";
  req.session.loggedIn = true;
  res.send("세션 설정 완료(setSession)");
});

app.get("/getSession", (req, res, next) => {
  console.log("req.session", req.session);
  console.log("req.session.userName", req.session.userName);
  console.log("req.session.loggedIn", req.session.loggedIn);
  res.send("세션 가져오가 (getSession)");
});

app.get("/destorySession", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("세션 삭제 실패");
    }
    res.clearCookie("session-cookie");
    res.send("세션 삭제 완료");
  });
});

// 쿠키는 백엔드에서 만들어서 프론트에게 전달
// 프론트는 cookies 저장소에 넣고 주소 호출할 때 자동으로 전달
app.post("/setCookie", (req, res, next) => {
  console.log(new Date(Date.now()));
  res.cookie("haha", "hoho", {
    expires: new Date(Date.now() + 1000 * 60), // 1000 * 60: 1븐
  });
  res.cookie("signhaha", "hoho", { signed: true });
  res.send("쿠키설정");
});

app.get("/getCookie", (req, res, next) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("쿠키확인");
});

app.get("/", (req, res, next) => {
  console.log(req.body);
  console.log(req.query);
  console.log("/경로 요청");
  res.send("성공");
});

app.get("/html", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 에러처리 미들웨어
app.use((err, req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(`서버 ${app.get("port")} 시작`);
});
