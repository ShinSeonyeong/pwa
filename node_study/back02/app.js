require("dotenv").config();
const webpush = require("web-push");

// makeKey.js 실행해서 가져온 키
webpush.setVapidDetails(
  "mailto: sunyoeng423@naver.com",
  "BDVOyPJOV9bxzvWZ3h6Em6tIwLdgBR69ufviuefViQs-un6Y90SB-KY2mt_tbvJ2rrQzwF6DFBdH0gDDZhCwSFo",
  "x4zO2iCwQyrRbKULpPM8cqW9lTPMa3WYLJJMQQ4SC0U"
);

const mymid = require("./myMiddle"); // 함수 반환, index.js는 생략됨
const cors = require("cors");
const pool = require("./db");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

// console.log(morgan().toString());
// console.log(cors().toString());

// console.log(mymid.toString());
app.use(morgan("tiny"));
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

// 서버 시작 누르면 배열 값 삭제 새로고침
// 배열이기에 서버 재시작하면 프론트 정보 사라짐, DB에 넣어야 함.
const ss = [];

app.post("/subscribe", async (req, res, next) => {
  try {
    console.log(req.body); // 클라이언트에서 보낸 구독 정보가 req.body에 담겨있음
    // console.log(req.body.sub);
    // console.log(req.body.sub.endpoint);
    // console.log(req.body.sub.keys.p256dh);
    // console.log(req.body.sub.keys.auth);
    // console.log(req.body.city);

    const conn = await pool.getConnection();
    const sql =
      "insert into subscriptions (endpoint, p256dh, auth, city) values (?,?,?,?)";
    const result = await conn.execute(sql, [
      req.body.sub.endpoint,
      req.body.sub.keys.p256dh,
      req.body.sub.keys.auth,
      req.body.city,
    ]);
    conn.release(); //pool 반환
    res.send("구독성공");
  } catch (e) {
    console.log(e);
    res.send("구독실패");
  }
});

// 관리자가 보내는게 알람이 아니고, 정해진 조건에 합하면 알람이 가는 형식이 되어야 한다.
app.get("/send", async (req, res, next) => {
  try {
    // query: http://localhost:8080?city=daegu
    // body: http://localhost:8080 raw-json 데이터 {"city":"daegu"}
    const { city } = req.query; // nodejs 책 4장, 6장 내용

    // orm라이브러리: sequelize 사용
    const conn = await pool.getConnection();
    const sql = "select * from subscriptions where city=?";
    const result = await conn.execute(sql, [city]);

    const payload = JSON.stringify({
      title: "New 알림",
      body: "알림이 도착하였습니다. 확인해주세요.",
      icon: "https://front02-snowy.vercel.app/",
    });

    const notifications = result[0].map((item) => {
      console.log("item=", item);
      const temp = {
        endpoint: item.endpoint,
        expirationTime: null,
        keys: {
          p256dh: item.p256dh,
          auth: item.auth,
        },
      };
      console.log("temp", temp);
      return webpush.sendNotification(temp, payload);
    });
    console.log("notifications=", notifications);
    await Promise.all(notifications);
    res.json({ message: "푸시 알람 전송 성공" });
  } catch (e) {
    console.log(e);
    res.json({ message: "푸시 알람 전송 실패" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
