var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var logger = require('morgan');

require("dotenv").config();
const cors = require("cors");
const nunjucks = require("nunjucks");

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var resRouter = require('./routes/reservation');
var payRouter = require('./routes/pay');
var cleanerRouter = require('./routes/cleaner');
var loginRouter = require('./routes/login');
var backApiRouter = require('./routes/backApi/admin');

var app = express();

app.use(cors({ origin: 'http://localhost:5175', credentials: true }));
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));
app.use(cookieParser());
app.use(expressSession({
  secret: 'a0123456789',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    secure: false,
  },
  name: "session-cookie",
}))

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "html");
// views 폴더 밑에 html 파일
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use((req,res,next)=> {
  res.locals.user = req.session.user; // 세션에 저장된 사용자 정보를 로컬 변수로 설정
  next();
})

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/reservation', resRouter);
app.use('/pay', payRouter);
app.use('/cleaner', cleanerRouter);
app.use('/login', loginRouter);
app.use('/back', backApiRouter);

module.exports = app;
