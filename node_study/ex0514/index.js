const http = require('http'); // 웹서버 역할을 해주는 라이브러리
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const password = '비밀번호'; // 숨겨진 데이터
        const indexhtml = await fs.readFile('./index.html', 'utf-8'); // index.html 파일을 읽어오는 것
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); // 문자열이 날아간다는 의미
        res.end(indexhtml);
        // res.end('<html><body><h1>Hi</h1></body></html>\n');
    } catch (e) {
        console.log(e);
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(e.message);
    }

}).listen(8080, '0.0.0.0', () => {
    console.log('Server started on port 8080');
})