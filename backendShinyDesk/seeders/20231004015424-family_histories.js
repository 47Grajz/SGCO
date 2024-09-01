'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Family_Histories', [{
        disease: "Diabetes",
        last_visit_date: "2022-03-15",
        PatientId: 1,
        createdAt :new Date(),
        updatedAt : new Date() 
      },{
        disease: "Hipertensión",
        last_visit_date: "2022-05-20",
        PatientId: 2,
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
