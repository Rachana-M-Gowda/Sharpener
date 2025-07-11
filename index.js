const express = require('express');
const app = express();

const PORT = 4000;

// Dynamic Route: /welcome/:username
app.get('/welcome/:username', (req, res) => {
  const username = req.params.username; // route parameter
  const role = req.query.role; // query parameter

  if (role) {
    res.send(`Welcome ${username}, your role is ${role}`);
  } else {
    res.send(`Welcome ${username}`);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
