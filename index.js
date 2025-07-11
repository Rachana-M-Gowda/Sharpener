const express = require('express');
const app = express();
const PORT = 3000;

// Routers
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

// Home route
app.get('/', (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Mount routers
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// 404 Not Found Handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
