// server/db/DB.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql@2025',
  database: 'expenses_db'
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = connection;
