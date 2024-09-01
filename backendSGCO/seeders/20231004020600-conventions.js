'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Conventions', [{
        name: "Sano",
        color: "Verde",
        createdAt :new Date(),
        updatedAt : new Date() 
      },{
        name: "Dañado",
        color: "Rojo",
        createdAt :new Date(),
        updatedAt : new Date() 
      },{
        name: "A Tratar",
        color: "Amarillo",
        createdAt :new Date(),
        updatedAt : new Date() 
      }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
