import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port:3306,
    password: '123',
    database: 'salesbuddy',
    waitForConnections: true,
    multipleStatements:true,
    connectionLimit: 10,
    queueLimit: 0
})

export default pool; 