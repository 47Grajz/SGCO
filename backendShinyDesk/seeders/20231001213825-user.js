'use strict';
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'John',
      lastName: 'Doe',
      email: 'judalomor27.95@gmail.com',
      password: await hashPassword('21sdd9*/ada5'),
      role: 101,
      status: 'Active',
      phoneNumber: '123456789',
      idCardNumber: '123456789',
      email_verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jane',
      lastName: 'Doe',
      email: 'vasquezariassofia2004@gmail.com',
      password: await hashPassword('21sdd9*/ada592651'),
      role: 202,
      status: 'Active',
      phoneNumber: '123456789',
      idCardNumber: '123456789',
      email_verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Juan',
      lastName: 'J',
      email: 'devjuangiraldo@gmail.com',
      password: await hashPassword('21sdd9*/ada5'),
      role: 101,
      status: 'Active',
      phoneNumber: '123456789',
      idCardNumber: '123456789',
      email_verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Juanes',
      lastName: 'Perez',
      email: 'diecasgta@gmail.com',
      password: await hashPassword('21sdd9*/ada592651'),
      role: 202,
      status: 'Active',
      phoneNumber: '123456789',
      idCardNumber: '123456789',
      email_verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Shiny',
      lastName: 'Desk',
      email: 'shinydeskmanager@gmail.com',
      password: await hashPassword('admin123'),
      role: 909,
      status: 'Active',
      phoneNumber: '123456789',
      idCardNumber: '123456789',
      email_verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      name: 'John',
      lastName: 'Doe',
      email: 'juanchomenl5678@gmail.com',
      password: await hashPassword('21sdd9*/ada5'),
      role: 808,
      status: 'Active',
      phoneNumber: '123456789',
      idCardNumber: '123456789',
      email_verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Diego',
      lastName: 'Santiago',
      email: 'diegokha19@gmail.com',
      password: await hashPassword('21sdd9*/ada592651'),
      role: 101,
      status: 'Active',
      phoneNumber: '123456789',
      idCardNumber: '123456789',
      email_verified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
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
