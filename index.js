const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql@2025', // replace with your password
  database: 'testdb'       // use the actual DB you've created
});

connection.connect((err) => {
  if (err) {
    console.log('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ Connection has been created');

  // Create Users table
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL
    );
  `;

  // Create Buses table
  const createBusesTable = `
    CREATE TABLE IF NOT EXISTS Buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber VARCHAR(100) UNIQUE NOT NULL,
      totalSeats INT NOT NULL,
      availableSeats INT NOT NULL
    );
  `;

  // Create Bookings table
  const createBookingsTable = `
    CREATE TABLE IF NOT EXISTS Bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT NOT NULL
    );
  `;

  // Create Payments table
  const createPaymentsTable = `
    CREATE TABLE IF NOT EXISTS Payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid DECIMAL(10, 2) NOT NULL,
      paymentStatus VARCHAR(100) NOT NULL
    );
  `;

  // Execute table creation queries
  connection.query(createUsersTable, (err) => {
    if (err) return console.log('❌ Users table creation error:', err);
    console.log('✅ Users table created or already exists');
  });

  connection.query(createBusesTable, (err) => {
    if (err) return console.log('❌ Buses table creation error:', err);
    console.log('✅ Buses table created or already exists');
  });

  connection.query(createBookingsTable, (err) => {
    if (err) return console.log('❌ Bookings table creation error:', err);
    console.log('✅ Bookings table created or already exists');
  });

  connection.query(createPaymentsTable, (err) => {
    if (err) return console.log('❌ Payments table creation error:', err);
    console.log('✅ Payments table created or already exists');
  });
});

app.get('/', (req, res) => {
  res.send('Bus Booking System API is running');
});

app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000');
});
