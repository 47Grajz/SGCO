'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Document);
      User.hasOne(models.Patient);
      User.hasOne(models.Dentist);
      User.hasOne(models.Secretary);
    }
  }
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    status: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    idCardNumber: DataTypes.STRING,
    email_verified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
  });
  User.beforeUpdate(async (user) => {
    if (user.changed('password')) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  })


  return User;
};