'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Medical_Histories',
      {
        fields: ['AppointmentId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'appointment-medical_history-association',
        references: { table: 'Appointments', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Medical_Histories", "appointment-medical_history-association")
  }
};
