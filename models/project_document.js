const db = require("../db/databasepg");

const { Sequelize, DataTypes } = require('sequelize');

const Project = require("./project");

const ProjectDocument = db.define('project_document', {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING
  },
  filename: {
    type: DataTypes.TEXT
  },
}, {
  timestamps: true,
  freezeTableName: true
});

ProjectDocument.belongsTo(Project, {
  foreignKey: "project_id",
  as: "project"
});

module.exports = ProjectDocument;