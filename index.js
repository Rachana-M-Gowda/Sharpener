const express = require('express');
const app = express();
const PORT = 3000;

const bookRoutes = require('./routes/bookRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use the /books route
app.use('/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
