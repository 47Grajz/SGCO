'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Appointments',
      {
        fields: ['SecretaryId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'secretary-appointment-association',
        references: { table: 'Secretaries', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Appointments", "secretary-appointment-association")
  }
};
