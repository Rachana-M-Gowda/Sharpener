const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('✅ Server is running at http://localhost:3000');
  });
});
