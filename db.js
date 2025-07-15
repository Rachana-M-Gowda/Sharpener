const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysql@2025',
  database: 'busbookingsystem'
});

module.exports = db;
