'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Dentist.hasMany(models.Appointment, {
        onDelete: 'CASCADE',
      });
      Dentist.belongsTo(models.User, {
        onDelete: 'CASCADE',
      });
      Dentist.hasOne(models.Setting, {
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Dentist.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dentist',
  });
  return Dentist;
};