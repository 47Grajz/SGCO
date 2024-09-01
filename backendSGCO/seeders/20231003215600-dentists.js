'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Dentists', [{
      name: "Laura",
      last_name: "Vasquez",
      phone_number: "987-654-3210",
      email: "alice.smith@example.com",
      birthday: "1990-05-20",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2
    },
    {
      name: "Bob",
      last_name: "Johnson",
      phone_number: "555-123-4567",
      email: "bob.johnson@example.com",
      birthday: "1985-08-10",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 4
    }], {});

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
