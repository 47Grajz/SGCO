'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Documents',
      {
        fields: ['UserId'], type: 'foreign key',
        onDelete: 'CASCADE',
        name: 'user-document-association',
        references: { table: 'Users', field: 'id' }
      })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Documents', "user-document-association")
  }
};
