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
      year: {
        type: Sequelize.INTEGER
      },
      term: {
        type: Sequelize.STRING
      },
      video_filename: {
        type: Sequelize.STRING
      },
      final_paper_filename: {
        type: Sequelize.STRING
      },
      presentation_filename: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "user"
          },
          key: "id"
        }
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      lesson_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "lesson"
          },
          key: "id"
        }
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