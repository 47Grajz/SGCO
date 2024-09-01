'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('teeth', [{
      type: "Incisivo",
      status_ini_evo: "Sano",
      PatientId: 1,
      number: 1,
      createdAt :new Date(),
        updatedAt : new Date() 
    },{
      type: "Molar",
      status_ini_evo: "Caries",
      PatientId: 2,
      number: 2,
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
