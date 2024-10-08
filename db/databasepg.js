require("dotenv").config();

// Sequelize
const Sequelize = require("sequelize");
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'postgres',
});
