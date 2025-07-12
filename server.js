// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Route to serve the HTML form
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'productForm.html'));
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Product Form Server!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
