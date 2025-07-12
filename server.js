// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// GET endpoint to serve HTML file
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the HTML API server!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
