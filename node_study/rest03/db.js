require('dotenv').config();
// .env 파일에 내용을 읽어서 process.env.변수명 작성

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true, // 대기할지 여부 
    connectionLimit: 10, // 최대 연결 수
    queueLimit: 0 // 대기열 최대 수
})

module.exports = pool;