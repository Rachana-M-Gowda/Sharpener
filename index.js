const express = require('express');
const app = express();
const PORT = 4000;

const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use(express.json());

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
