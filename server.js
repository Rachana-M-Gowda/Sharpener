// server.js

const express = require('express');
const app = express();
const port = 3000;

// Import route files
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');

// Middleware to parse JSON request bodies
app.use(express.json());

// Use route files with /api prefix
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
