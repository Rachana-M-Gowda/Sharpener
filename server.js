const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const { sequelize } = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/expenses', require('./routes/expenseRoutes'));

sequelize.authenticate().then(() => {
  console.log('DB connected');
  app.listen(3000, () => console.log('Server running on 3000'));
});
