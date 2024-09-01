'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tooth_Surfaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      part: {
        type: Sequelize.STRING
      },
      ConventionId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ToothId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      MedicalHistoryId:{
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Tooth_Surfaces');
  }
};