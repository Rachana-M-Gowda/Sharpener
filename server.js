// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., axios)
app.use(express.static(path.join(__dirname, 'public')));

// GET: Serve the HTML form
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'productForm.html'));
});

// POST: Handle form submission
app.post('/api/products', (req, res) => {
  const { productName } = req.body;
  console.log('Received product:', productName);
  res.send(`Product added: ${productName}`);
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Product POST API!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
