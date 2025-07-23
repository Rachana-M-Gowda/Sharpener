const express = require('express');
const path = require('path'); // <-- required to work with file paths
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// ✅ Serve frontend from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Load signup.html when visiting root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// ✅ Auth API route
app.use('/api/auth', authRoutes);

// ✅ Start server after DB sync
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
  });
});
