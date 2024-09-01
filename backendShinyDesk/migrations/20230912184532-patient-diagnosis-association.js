'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Diagnoses',
      {
        fields: ['PatientId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'patient-diagnosis-association',
        references: { table: 'Patients', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Diagnoses", "patient-diagnosis-association")
  }
};
