'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Appointments', [{
      notes: "Consulta de rutina",
      request_date: "2023-04-10",
      appointment_date_hour: new Date(),
      modality: "Presencial",
      status: "Programada",
      DentistId: 1,
      PatientId: 1,
      SecretaryId: 1,
      ConsultationTypeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      notes: "Revisión de ortodoncia",
      request_date: "2023-05-02",
      appointment_date_hour: new Date(),
      modality: "Virtual",
      status: "Confirmada",
      DentistId: 2,
      PatientId: 2,
      SecretaryId: 2,
      ConsultationTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      notes: "Consulta de rutina",
      request_date: "2023-11-14",
      appointment_date_hour: new Date(),
      modality: "Presencial",
      status: "Cancelada",
      DentistId: 1,
      PatientId: 3,
      SecretaryId: 1,
      ConsultationTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      notes: "Revisión de ortodoncia",
      request_date: "2023-11-16",
      appointment_date_hour: new Date(),
      modality: "Virtual",
      status: "Confirmada",
      DentistId: 2,
      PatientId: 4,
      SecretaryId: 2,
      ConsultationTypeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      notes: "Revisión de ortodoncia",
      request_date: "2023-11-16",
      appointment_date_hour: new Date(),
      modality: "Virtual",
      status: "Programada",
      DentistId: 2,
      PatientId: 5,
      SecretaryId: 2,
      ConsultationTypeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
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
