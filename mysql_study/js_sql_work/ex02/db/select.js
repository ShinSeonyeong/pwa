const mysql = require('mysql2');

// console.log(mysql);

function people_select() {

    const dbInfo = {
        host: '192.168.0.42',
        user: 'root',
        password: 'rootpassword',
        database: 'sy'
    }

    const connection = mysql.createConnection(dbInfo);
    // console.log(connection);

    // db 연결 시작
    connection.connect();

    connection.query('select * from people', (error, result, fields) => {
        if (error) throw error;
        console.log(result);
    })

    // db연결 끊기
    connection.end();
}

module.exports = {people_select}