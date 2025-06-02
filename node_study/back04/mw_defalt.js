const express = require("express"); // 프레임워크: 정형화된 개발방법
const path = require("path"); // 경로
const nunjucks = require("nunjucks"); // res.render('index')
const morgan = require("morgan"); // 로그
const cookieParser = require("cookie-parser"); // 쿠키
const expressSession = require("express-session"); // 세션
const cors = require("cors"); //react,, 등 각종 언어와 통신
const multer = require("multer"); // 파일 업로드
const fs = require("fs"); // 폴더 만들기

// uploads 폴더 없으면 생성하는 로직
try {
  fs.readdirSync("uploads");
} catch (e) {
  console.error("uploads폴더가 없어서 uploads폴더 생성합니다.");
  fs.mkdirSync("uploads");
}

require("dotenv").config(); // .env 로딩

const app = express(); // express 생성

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

const upload = multer({
  storage: multer.diskStorage({
    // 파일은 디스크에 저장하겠다는 의미
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      console.log(ext);
      console.log(path.basename(file.originalname, ext) + Date.now() + ext);
      // 원래 파일명 + 현재시간 + 확장자로 설정하겠다.
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 100 * 1024 * 1024 }, // 30MB까지 업로드 가능함.
});

/* 미들웨어 장착 끝 */

app.get("/", (req, res, next) => {
  console.log("기본적인 설정 종료");
  res.render("index");
});

// 에러처리 미들웨어
app.use((err, req, res, next) => {
  console.log("에러 미들웨어 동작");
  console.log(err);
  console.error(err.message);
  res.send(err.toString());
});

app.listen(app.get("port"), () => {
  console.log(`서버 ${app.get("port")} 시작`);
});
