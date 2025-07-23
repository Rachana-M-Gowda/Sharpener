const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'mysql@2025', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
