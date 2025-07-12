const express = require('express');
const app = express();
const port = 3000;

const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
