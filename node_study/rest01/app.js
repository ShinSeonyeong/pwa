// 설치되어진 라이브러리 가져올 때 ./express.js 이런식으로 안 가져옴.
// 폴더를 가지고 옴.
// const aa = require('./test'); // 모듈 = 프레임워크 = 라이브러리
// console.log(aa);

const express = require("express");
const path = require("path");

const app = express();

const obj = {}

app.set('port', process.env.PORT || 8080);
// app.set('test', '100');


// 항상 출력됨
app.use((req, nes, next)=>{
    console.log('여기에 들렸다가 갑니다.');
    next();
})

app.get('/html', (req, res)=>{
    console.log(__dirname); // 현재 경로
    // 현재 경로에서 html 폴더 밑에 index.html 파일을 찾는다.
    res.sendFile(path.join(__dirname, './html/index.html'));
})

app.get('/', (req, res, next) => {
    req.test = 'aaatest';
    console.log(app.get('test'));
    obj.aa = "aa 변수입니다.";
    next();
    // res.send('hello world');
}, (req, res)=>{
    console.log(obj.aa);
    console.log(req.method);
    console.log(req.test);
    // res.end('hello get');
    throw new Error('error'); // 강제 에러 발생, 매개변수 4개인 미들웨어가 없다.
})

app.post('/', (req, res) => {
    // console.log(res);
    // console.log(req);
    console.log(obj.aa);
    console.log(req.method);
    res.send('hello post');
})

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({'error': '에러가 강제로 발생하였습니다.'});
})

app.listen(app.get('port'), () => {
    console.log('server is running port 3000');
})