const express = require("express");
const multer = require("multer"); // 파일 업로드
const fs = require("fs"); // 폴더 만들기
const path = require("path"); // 경로

// uploads 폴더 없으면 생성하는 로직
try {
  fs.readdirSync("uploads");
} catch (e) {
  console.error("uploads폴더가 없어서 uploads폴더 생성합니다.");
  fs.mkdirSync("uploads");
}

const router = express.Router();

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

router.get("/", (req, res, next) => {
  console.log(req.app.get("port"));
  console.log(req.app.get("static"));
  res.locals.myname = "홍길동";
  const users = [
    { name: "홍길동", age: 20 },
    { name: "박길동", age: 40 },
    { name: "김길동", age: 30 },
  ];
  res.render("index", { title: "title제목", users });
});

router.get("/aa/:id", (req, res, next) => {
  //   console.log(req.app.set("static", "전역변수설정"));
  console.log(req.params);
  res.render("aa", { title: "title제목" });
});

router.post("/upload", upload.single("image"), (req, res, next) => {
  console.log("업로드 됨");
  res.json({
    msg: "upload success",
    filename: req.file.originalname,
    path: req.file.path,
  });
});

module.exports = router;
