'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Patients', [{
      name: "John",
      last_name: "Doe",
      second_last_name: "Smith",
      phone_number: "123-456-7890",
      identification_card_number: 123456789,
      gender: "Male",
      birthday: "1990-05-15",
      special_notes: "Patient has allergies to penicillin.",
      occupation: "Engineer",
      enrollment_date: "2022-01-10",
      responsible_phone_number: "987-654-3210",
      responsible_person_name: "Jane Doe",
      eps: "XYZ Health",
      birth_place: "New York, USA",
      usual_residence: "Los Angeles, USA",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    },
    {
      name: "Alice",
      last_name: "Johnson",
      second_last_name: "Brown",
      phone_number: "456-789-1234",
      identification_card_number: 987654321,
      gender: "Female",
      birthday: "1985-08-20",
      special_notes: "None",
      occupation: "Teacher",
      enrollment_date: "2021-11-05",
      responsible_phone_number: "789-123-4567",
      responsible_person_name: "Bob Johnson",
      eps: "ABC Healthcare",
      birth_place: "Chicago, USA",
      usual_residence: "San Francisco, USA",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 3
    },
    {
      name: "Julian",
      last_name: "David",
      second_last_name: "Lopez",
      phone_number: "3145-789-1234",
      identification_card_number: 104751200,
      gender: "Male",
      birthday: "1985-08-20",
      special_notes: "None",
      occupation: "Engineer",
      enrollment_date: "2021-11-05",
      responsible_phone_number: "1452-123-4567",
      responsible_person_name: "Santigo Perez",
      eps: "Salud Total",
      birth_place: "Chicago, USA",
      usual_residence: "San Francisco, USA",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 7
    },
    {
      name: "Natalia",
      last_name: "Martinez",
      second_last_name: "Lopez",
      phone_number: "121-789-1234",
      identification_card_number: 451000124,
      gender: "Male",
      birthday: "1985-08-20",
      special_notes: "None",
      occupation: "Engineer",
      enrollment_date: "2021-11-05",
      responsible_phone_number: "1452-123-4567",
      responsible_person_name: "Santigo Perez",
      eps: "Salud Total",
      birth_place: "Chicago, USA",
      usual_residence: "San Francisco, USA",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 3
    },
    {
      name: "Carlos",
      last_name: "Dario",
      second_last_name: "Gomez",
      phone_number: "1452-789-1234",
      identification_card_number: 10458726,
      gender: "Male",
      birthday: "1985-08-20",
      special_notes: "None",
      occupation: "Engineer",
      enrollment_date: "2021-11-05",
      responsible_phone_number: "1452-123-4567",
      responsible_person_name: "Santigo Perez",
      eps: "Salud Total",
      birth_place: "Chicago, USA",
      usual_residence: "San Francisco, USA",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 7
    },
    {
      name: "Julio",
      last_name: "Ramirez",
      second_last_name: "G",
      phone_number: "3145-789-1234",
      identification_card_number: 1047877451200,
      gender: "Male",
      birthday: "1985-08-20",
      special_notes: "None",
      occupation: "Engineer",
      enrollment_date: "2021-11-05",
      responsible_phone_number: "1452-123-4567",
      responsible_person_name: "Santigo Perez",
      eps: "Salud Total",
      birth_place: "Chicago, USA",
      usual_residence: "San Francisco, USA",
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
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
