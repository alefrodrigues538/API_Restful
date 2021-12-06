async function connect() {
    if (global.connection && global.connection.state != 'disconnected')
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(
        "mysql://root@localhost:3306/api_db");
    console.log("Conectou ao MYSQL!!");

    global.connection = connection;

    return connection;
}

connect();

async function SelectAllUsers() {
    const conn = await connect();
    return await conn.query('select * from users')
}

module.exports = { SelectAllUsers }