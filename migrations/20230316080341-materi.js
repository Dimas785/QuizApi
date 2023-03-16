'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('materis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bab: {
        type: Sequelize.STRING
      },
      pasal: {
        type: Sequelize.INTEGER
      },
      materi: {
        type: Sequelize.TEXT
      },
      categoryId: {
        type: Sequelize.INTEGER
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('materis');
  }
};
