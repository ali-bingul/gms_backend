const db = require("../db/databasepg");

const { Sequelize, DataTypes } = require('sequelize');

const User = require("./user");

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
  year: {
    type: DataTypes.INTEGER
  },
  term: {
    type: Sequelize.STRING
  },
  video_filename: {
    type: DataTypes.STRING
  },
  final_paper_filename: {
    type: DataTypes.STRING
  },
  presentation_filename: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  freezeTableName: true
});

Project.belongsTo(User, {
  foreignKey: "user_id",
  as: "user"
});

module.exports = Project;