'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('Tooth_Surfaces', [{
      type: "Incisal",
      part: "Superior",
      ConventionId: 1,
      ToothId: 1,
      MedicalHistoryId: 1,
      createdAt :new Date(),
        updatedAt : new Date() 
    },{
      type: "Mesial",
      part: "Inferior",
      ConventionId: 2,
      ToothId: 2,
      MedicalHistoryId: 2,
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
