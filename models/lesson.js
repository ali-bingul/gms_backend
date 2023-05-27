const db = require("../db/databasepg");

const { Sequelize, DataTypes } = require('sequelize');

const Lesson = db.define('lesson', {
  // Model attributes are defined here
  lesson_name: {
    type: DataTypes.STRING
  },
  lesson_code: {
    type: DataTypes.STRING
  },
  lesson_term: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = Lesson;