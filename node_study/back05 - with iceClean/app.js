const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
require("dotenv").config(); // .env 파일을 읽어 환경변수로 등록
const cors = require("cors");

const { sequelize, User } = require("./models");
// console.log(sequelize);

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

// 동기화
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.error("DB 연결 실패", err);
  });

// 즉시 함수 호출 실행
(async function test() {
  // await를 top level에서 사용 불가능 함.
  const result = await User.findAll({
    attributes: ["name", "age"],
  });
  // console.log(result);
})();

// User.create({ name: "qwer", age: 20, married: 0, comment: "안녕하세요" });

app.use(cors()); // CORS 미들웨어 장착
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
/* 미들웨어 장착 끝 */

// 우리가 만든폴더면 ./ 넣어주고, routes 폴더에 있는 파일을 불러온다.
const resRouter = require("./routes/ResRouter.js");
const gisaRouter = require("./routes/GisaRouter.js");
app.use("/res", resRouter);
app.use("/gisa", gisaRouter);

app.use((req, res, next) => {
  console.log("해당하는 라우터가 없다");
  const error = new Error("해당하는 페이지가 없습니다.");
  next(error); // 에러 미들웨어로 가라
});

app.use((err, req, res, next) => {
  console.log("에러 미들웨어 동작");
  console.error(err);
  console.error(err.message);
  res.send(err.toString() + "<a href='/'>첫페이지로</a>");
});

app.listen(app.get("port"), () => {
  console.log(`서버 ${app.get("port")}시작`);
});
