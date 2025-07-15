const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes'); // Correct path

app.use(express.json());
app.use('/students', studentRoutes); // Route setup

app.listen(3000, () => {
  console.log('🚀 Server started at http://localhost:3000');
});
