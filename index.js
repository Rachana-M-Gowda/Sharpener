const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const busesRoutes = require('./routes/buses');

app.use(express.json());
app.use('/users', usersRoutes);
app.use('/buses', busesRoutes);

app.get('/', (req, res) => {
  res.send('Bus Booking System API is live 🚍');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
