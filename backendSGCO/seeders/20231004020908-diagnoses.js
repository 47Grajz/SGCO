'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Diagnoses', [{
      description: "Caries en el diente molar superior derecho.",
      date: "2023-04-18",
      PatientId: 1,
      MedicalHistoryId: 1,
      createdAt :new Date(),
        updatedAt : new Date() 
    },{
      description: "Sensibilidad dental en los dientes frontales.",
      date: "2023-05-12",
      PatientId: 2,
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
