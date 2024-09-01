'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('teeth',
      {
        fields: ['PatientId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'patient-tooth-association',
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
    await queryInterface.removeConstraint('teeth', 'patient-tooth-association'
    )
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
