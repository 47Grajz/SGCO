'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Documents', [{
        file_type: "PDF",
        date: "2023-04-20",
        name: "Informe Dental",
        file_path: "/documentos/informe_dental.pdf",
        UserId: 1,
        createdAt :new Date(),
        updatedAt : new Date() 
      },{
        file_type: "JPEG",
        date: "2023-05-05",
        name: "Radiografía Dental",
        file_path: "/documentos/radiografia_dental.jpeg",
        UserId: 2,
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
