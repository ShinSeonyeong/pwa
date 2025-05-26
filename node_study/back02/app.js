require("dotenv").config();
const webpush = require('web-push');

webpush.setVapidDetails(
  "mailto: sunyoeng423@naver.com",
  "BMJypUqPyy71zfr0ErUBVAVce6JE1AMbZzXa45C5dKSjjmcYnrcN9gBYtJu9xmam9OmoS1wfa51tKLigNvzRsIk",
  "VpxjAv9K5fsZlpLWPueAKi1GIAy76TXUOebzrwUKrus"
);

const mymid = require("./myMiddle"); // 함수 반환, index.js는 생략됨
const cors = require("cors");
// const pool = require("./db");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

// console.log(morgan().toString());
// console.log(cors().toString());

console.log(mymid.toString());
app.use(morgan());
app.use(cors());
// 해당하는 파일이 있을 때는 res.sendFile(), next()
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(mymid);

app.use((req, res, next) => {
  console.log("무조건 실행");
  next();
});

app.get("/", (req, res, next) => {
  console.log("호출");
  res.send("Client에게 보내기");
});

app.get("/subscribe", (req, res, next) => {
  console.log(req.body);
  res.send("구독성공");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
