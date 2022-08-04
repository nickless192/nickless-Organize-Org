const mysql = require('mysql2');


// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        // mysql password
        password: 'sqlDev26',
        database: 'organization'
    }
);

module.exports = db;