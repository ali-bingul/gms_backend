const db = require("../db/databasepg");

const { DataTypes } = require('sequelize');

const User = db.define('user', {
  // Model attributes are defined here
  name_surname: {
    type: DataTypes.STRING
  },
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
  timestamps: false,
  freezeTableName: true
});

module.exports = User;