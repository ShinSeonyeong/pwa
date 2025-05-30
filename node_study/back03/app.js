const express = require("express");
const path = require("path");

const nunjucks = require("nunjucks");
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

// app.use(
//   (req, res, next) => {
//     console.log(req.method, "그 다음 미들웨어로 진행");
//     next();
//   },
//   (req, res, next) => {
//     console.log("다음 미들웨어(1)");
//     try {
//       qwer; // 일부러 에러 만들었음.
//     } catch (e) {
//       console.log(e);
//       next(e); // 에러 미들웨어로 진행됨.
//     }
//     next();
//   },
//   (req, res, next) => {
//     console.log("다음 미들웨어(2)");
//     next();
//   }
// );

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// console.log(morgan("dev").toString());

// 로그남기기
app.use(morgan("dev"), express.json(), express.urlencoded({ extended: false }));
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
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.get("/", (req, res, next) => {
  console.log(req.body);
  console.log(req.query);
  console.log("/경로 요청");

  // DB에 가서 새로운 데이터를 가져올 수도 있음.
  res.locals.member = [
    {
      name: "홍길동",
      age: 26,
    },{
      name: "최길동",
      age: 26,
    },{
      name: "이길동",
      age: 26,
    },
  ];
  res.locals.data = "새로운 데이터";
  res.locals.aaa = "aaa 새로운 데이터";
  // res.send("성공");
  res.render("index", { title: "제목, app.js에서 보냄" });
});

app.post("/login", (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (email === "aaa@naver.com" && password === "1234") {
    req.session.user = { email };
    res.send("로그인성공");
  } else {
    res.send("로그인실패: email, password 확인해주세요.");
  }
});

app.get("/mypage", (req, res, next) => {
  if (req.session.user) {
    res.send(req.session.user);
  } else {
    res.send("로그인이 필요합니다.");
  }
});

app.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return res.state(500).send("세션삭제실패");
    }
    res.clearCookie("session-cookie");
    res.send("로그아웃 되었습니다.");
  });
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

app.get("/html", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.log("에러 미들웨어 동작");
  res.send(err.toString());
  // res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(app.get("port"), () => {
  console.log(`서버 ${app.get("port")} 시작`);
});
