'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Tooth_Surfaces',
      {
        fields: ['MedicalHistoryId'], type: 'foreign key',
        name: 'medical_history-tooth-association',
        onDelete: 'CASCADE',
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
    await queryInterface.removeConstraint('Tooth_Surfaces', 'medical_history-tooth-association'
    )
  }
};
