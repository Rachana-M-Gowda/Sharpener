const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', authRoutes);

// Start
sequelize.sync().then(() => {
  console.log('DB synced');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
