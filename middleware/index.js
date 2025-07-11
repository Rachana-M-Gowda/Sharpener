const express = require('express');
const app = express();

// Custom Middleware
const addUserMiddleware = (req, res, next) => {
  req.user = "Guest";  // add a new property
  next();              // move to next middleware or route
};

// Apply the middleware to the /welcome route
app.get('/welcome', addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
