const db = require("../db/databasepg");

const { Sequelize, DataTypes } = require('sequelize');

const User = db.define('user', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  is_admin: {
    type: DataTypes.BOOLEAN
  }
}, {
  timestamps: true,
  freezeTableName: true
});

module.exports = User;