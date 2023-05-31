'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lesson', [
      {
        lesson_name: "Mühendislik Tasarımı 1",
        lesson_code: "EEM4501",
        lesson_term: "Güz",
      },
      {
        lesson_name: "Proje Hazırlık",
        lesson_code: "EEM4507",
        lesson_term: "Güz",
      },
      {
        lesson_name: "Mühendislik Tasarımı 2",
        lesson_code: "EEM4504",
        lesson_term: "Bahar",
      },
      {
        lesson_name: "Bitirme Projesi",
        lesson_code: "EEM4502",
        lesson_term: "Bahar",
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lesson', null, {});
  }
};
