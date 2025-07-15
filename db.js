// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',               // your MySQL username
  password: 'mysql@2025',               // your MySQL password
  database: 'BUSBOOKINGSYSTEM' // your database name
});

// Optional: test connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database ');
    connection.release(); // release the connection back to pool
  }
});

module.exports = pool;
