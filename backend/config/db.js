const { Sequelize } = require('sequelize');

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Add this line to debug

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
});

module.exports = sequelize;
