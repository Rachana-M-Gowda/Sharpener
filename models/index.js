const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('busbookingsystem', 'root', 'mysql@2025', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Bus = require('./bus')(sequelize, DataTypes);
db.Booking = require('./booking')(sequelize, DataTypes);
db.Payment = require('./payment')(sequelize, DataTypes);
// Associations
db.User.hasMany(db.Booking);
db.Booking.belongsTo(db.User);

db.Bus.hasMany(db.Booking);
db.Booking.belongsTo(db.Bus);

db.Booking.hasOne(db.Payment);
db.Payment.belongsTo(db.Booking);

module.exports = db;
