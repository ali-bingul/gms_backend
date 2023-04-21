const db = require("../db/databasepg");

const { Sequelize, DataTypes } = require('sequelize');

const Project = db.define('project', {
  // Model attributes are defined here
  name_surname: {
    type: DataTypes.STRING
  },
  project_name: {
    type: DataTypes.STRING
  },
  team_members: {
    type: DataTypes.TEXT
  },
  professor: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  },
  term: {
    type: Sequelize.STRING
  }
}, {
  timestamps: true,
  freezeTableName: true
});

module.exports = Project;