require('dotenv').config();

// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_NAME);

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST, // mysql 주소
    user: process.env.DB_USER, // mysql 사용자
    port: process.env.DB_PORT, // mysql 포트
    password: process.env.DB_PASSWORD, // mysql 비밀번호
    database: process.env.DB_NAME, // mysql 데이터베이스
    waitForConnections: true, // 연결 기다림, 대기여부
    connectionLimit: 10, // 최대연결 수
    queueLimit: 0 // 대기열 최대 수 작업지시 개수 (무한대까지 연결할 수 있도록 0으로 설정(기본값 0))
});

// try {
//     pool.getConnection((err, connection) => {
//         if (err) {
//             console.log('DB Connection Error', err);
//             return;
//         }
//         console.log('DB Connection Success');
//         connection.release();
//     })
// } catch (e) {
//     console.error(e);
// }

module.exports = pool;
//
// module.exports = {
//     aa: 'aa',
// }