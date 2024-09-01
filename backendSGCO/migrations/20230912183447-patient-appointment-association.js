'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Appointments',
      {
        fields: ['PatientId'], type: 'foreign key',
        name: 'patient-appointment-association',
        references: { table: 'Patients', field: 'id' },
        onDelete: 'CASCADE',
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('patients', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Appointments", "patient-appointment-association")
  }
};
