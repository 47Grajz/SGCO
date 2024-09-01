'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Family_Histories',
      {
        fields: ['PatientId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'patient-family_history-association',
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
    await queryInterface.removeConstraint("Family_Histories", "patient-family_history-association")

  }
};
