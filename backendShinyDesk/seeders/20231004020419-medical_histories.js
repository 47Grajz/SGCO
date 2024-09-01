'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Medical_Histories', [{
    date: "2023-04-15",
    observations: "El paciente se queja de dolor de muelas en la parte superior derecha.",
    status: "En curso",
    AppointmentId: 1,
    createdAt :new Date(),
        updatedAt : new Date() 
  },{
    date: "2023-05-10",
    observations: "El paciente reporta sensibilidad dental en los dientes frontales.",
    status: "Finalizado",
    AppointmentId: 2,
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
