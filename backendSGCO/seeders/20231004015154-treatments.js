'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Treatments', [{
        name: "Limpieza Dental",
        description: "Procedimiento estándar de limpieza dental para eliminar la placa y el sarro.",
        duration: 60,
        createdAt :new Date(),
        updatedAt : new Date() 
      },{
        name: "Blanqueamiento Dental",
        description: "Tratamiento de blanqueamiento dental para mejorar el color de los dientes.",
        duration: 90,
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
