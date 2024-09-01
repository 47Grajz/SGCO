'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('Consultation_Types', [{
      name: "Consulta de Rutina",
      description: "Una consulta estándar de control y seguimiento.",
      duration: '00:30:00',
      price: 50.0,
      previous_appointment: true,
      createdAt :new Date(),
        updatedAt : new Date() 
    },{
      name: "Consulta de Ortodoncia",
      description: "Consulta especializada en ortodoncia y alineación dental.",
      duration: '00:45:00',
      price: 75.0,
      previous_appointment: true,
      createdAt :new Date(),
        updatedAt : new Date() 
    },{
      name: "Emergencia Dental",
      description: "Consulta urgente para casos de dolor o emergencias dentales.",
      duration: '1:00:00',
      price: 100.0,
      previous_appointment: false,
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
