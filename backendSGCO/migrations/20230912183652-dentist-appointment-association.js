'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Appointments',
      {
        fields: ['DentistId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'dentist-appointment-association',
        references: { table: 'Dentists', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Appointments", "dentist-appointment-association")
  }
};
