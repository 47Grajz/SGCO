'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Tooth_Surfaces',
      {
        fields: ['ConventionId'], type: 'foreign key',
        name: 'convention-tooth_surface-association',
        references: { table: 'Conventions', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Tooth_Surfaces',
    'convention-tooth_surface-association')
  }
};
