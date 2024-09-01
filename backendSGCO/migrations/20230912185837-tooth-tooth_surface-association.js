'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Tooth_Surfaces',
      {
        fields: ['ToothId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'tooth-tooth_surface-association',
        references: { table: 'teeth', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Tooth_Surfaces', 'tooth-tooth_surface-association'
    )
  }
};
