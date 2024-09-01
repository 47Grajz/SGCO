'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('checkouts', [{
    description: "Ingreso por servicios dentales",
    date: "2023-04-25",
    income: 1500.0,
    expenditure: 0.0,
    createdAt :new Date(),
        updatedAt : new Date() 
  },{
    description: "Compra de suministros dentales",
    date: "2023-05-10",
    income: 0.0,
    expenditure: 450.0,
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
