const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);

// Sync DB and Start Server

sequelize.sync({ force: true })  // DANGER: This drops and recreates all tables
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running at http://localhost:3000");
    });
  })
  .catch(err => console.log(err));
