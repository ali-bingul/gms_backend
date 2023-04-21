'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_surname: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      },
      team_members: {
        type: Sequelize.TEXT
      },
      professor: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      term: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('project');
  }
};