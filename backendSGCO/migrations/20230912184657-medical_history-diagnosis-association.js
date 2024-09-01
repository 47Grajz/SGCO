'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Diagnoses',
      {
        fields: ['MedicalHistoryId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'medical_history-diagnosis-association',
        references: { table: 'Medical_Histories', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Diagnoses", "medical_history-diagnosis-association")
  }
};
