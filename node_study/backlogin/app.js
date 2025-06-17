const express = require('express');
const coockieParser = require('cookie-parser');
const expressSession = require('express-session');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors(
    {
      origin: 'http://localhost:5175', // 프론트엔드 주소
      credentials: true,
    }
));

app.use(express.json()); // JSON 형식의 요청 본문을 파싱하기 위한 미들웨어
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 요청 본문을 파싱하기 위한 미들웨어
app.use('/', express.static('public'));
app.use(coockieParser('keyboard cat')); // 쿠키를 파싱하기 위한 미들웨어
app.use(expressSession({
  secret: 'keyboard cat', // 세션을 암호화하기 위한 비밀 키
  resave: false, // 세션이 변경되지 않아도 다시 저장할지 여부
  saveUninitialized: false, // 초기화되지 않은 세션을 저장할지 여부
  cookie: {httpOnly: true, secure: false}
}));

app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
