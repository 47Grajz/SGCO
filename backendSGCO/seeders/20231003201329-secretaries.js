'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Secretaries', [{
      name: "María",
      last_name: "González",
      birthday: "1990-05-15",
      gender: "Femenino",
      email: "maria.gonzalez@example.com",
      phone_number: "+1 (123) 456-7890",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 6
    }, {
      name: "Juan",
      last_name: "Pérez",
      birthday: "1985-08-20",
      gender: "Masculino",
      email: "juan.perez@example.com",
      phone_number: "+1 (987) 654-3210",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 7
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
