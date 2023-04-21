const db = require("../db/databasepg");

const { Sequelize, DataTypes } = require('sequelize');

const Project = require("./project");

const ProjectSection = db.define('project_section', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  },
  order: {
    type: DataTypes.INTEGER
  },
}, {
  timestamps: true,
  freezeTableName: true
});

ProjectSection.belongsTo(Project, {
  foreignKey: "project_id",
  as: "project"
});

module.exports = ProjectSection;