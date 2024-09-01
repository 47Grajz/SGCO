'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      request_date: {
        type: Sequelize.DATE
      },
      appointment_date_hour: {
        type: Sequelize.DATE
      },
      modality: {
        type: Sequelize.STRING,
        defaultValue: 'undefined'
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'undefined'
      },
      visible: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      DentistId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      PatientId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      SecretaryId:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ConsultationTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Consultation_Types',
            key: 'id'
          }
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};