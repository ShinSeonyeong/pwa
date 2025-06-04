const express = require("express"); // 프레임워크: 정형화된 개발방법
const path = require("path"); // 경로
const nunjucks = require("nunjucks"); // res.render('index')
const morgan = require("morgan"); // 로그
const cookieParser = require("cookie-parser"); // 쿠키
const expressSession = require("express-session"); // 세션
const cors = require("cors"); //react,, 등 각종 언어와 통신

const indexRouter = require("./routes/index"); // 라우터
const userRouter = require("./routes/user"); // user 라우터
const freeboardRouter = require("./routes/freeboard"); // freeboard 라우터

require("dotenv").config(); // .env 로딩

const app = express(); // express 생성

// console.log(app);

/* 미들웨어 장착 시작 */
// cors 에러 해결
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // 쿠키내용 허용
  })
);

app.use(morgan("dev"));
app.use(express.json(), express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));
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

/* 미들웨어 장착 끝 */

app.use("/", indexRouter); // index 라우터 장착
app.use("/user", userRouter); // user 라우터 장착
app.use("/freeboard", freeboardRouter); // freeboard 라우터 장착

app.use((req, res, next) => {
  console.log("해당하는 라우터가 없다.");
  const error = new Error("해당하는 페이지가 없습니다.");
  next(error); // 에러 미들웨어로 가라는 의미.
});

// 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.log("에러 미들웨어 동작");
  console.log(err);
  console.error(err.message);
  res.send(err.toString() + " <a href='/'>첫 페이지로</a>");
});

app.listen(app.get("port"), () => {
  console.log(`서버 ${app.get("port")} 시작`);
});
