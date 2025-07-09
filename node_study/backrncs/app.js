var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var logger = require('morgan');

require("dotenv").config();  // .env

const mongo = require("./schemas");
mongo();

require("./schemas")

const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();

app.use(cors(
    // {
    //   origin: 'http://localhost:5173',
    //   credentials: true, // 쿠키값 허용 하겠다
    // }
))
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

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
})