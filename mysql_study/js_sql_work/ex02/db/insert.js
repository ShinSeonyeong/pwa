const mysql = require('mysql2');

function people_insert(name, age) {
    const dbInfo = {
        host: '192.168.0.42',
        user: 'root',
        password: 'rootpassword',
        database: 'sy'
    }

    const connection = mysql.createConnection(dbInfo);

    // db 연결 시작
    connection.connect();

    const sql = 'insert into people (person_name, age) values (?,?)'
    const values = [name, age]
    console.log(name, age)

    connection.query(sql, values, (error, result, fields) => {
        if (error) throw error;
        console.log(result);
    })

    // db연결 끊기
    connection.end();
}

module.exports = { people_insert }