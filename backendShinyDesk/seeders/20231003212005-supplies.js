'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('Supplies', [{
      name: "Toothbrush",
      price: 2.99,
      amount: 100,
      createdAt :new Date(),
        updatedAt : new Date() 
    },
    {
      name: "Dental Floss",
      price: 1.49,
      amount: 200,
      createdAt :new Date(),
        updatedAt : new Date() 
    },
    {
      name: "Toothpaste",
      price: 3.99,
      amount: 50,
      createdAt :new Date(),
        updatedAt : new Date() 
    }], {});
    
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
