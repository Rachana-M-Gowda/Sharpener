const express = require('express');
const app = express();

app.use(express.json()); // For parsing JSON if needed

const PORT = 4000;

// Products Routes
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// Categories Routes
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// Wildcard Route for Undefined Paths
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
