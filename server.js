const express = require('express');
const app = express();
const PORT = 3000;

const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.use('/api/products', productRoutes);

app.use(errorHandler); // Centralized error handler

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
