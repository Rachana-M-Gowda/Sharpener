const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const paymentRoutes=require('./routes/paymentRoutes');

app.use('/users', userRoutes);
app.use('/buses', busRoutes);
app.use('/bookings', bookingRoutes);
app.use('/payment',paymentRoutes);

// Sync DB and start server
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

