'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      emailNotifications: {
        type: Sequelize.BOOLEAN
      },
      appointmentNotifications: {
        type: Sequelize.BOOLEAN
      },
      weekdayStartTime: {
        type: Sequelize.TIME
      },
      weekdayEndTime: {
        type: Sequelize.TIME
      },
      saturdayStartTime: {
        type: Sequelize.TIME
      },
      saturdayEndTime: {
        type: Sequelize.TIME
      },
      DentistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dentists',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Settings');
  }
};