'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultation_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Consultation_Type.hasMany(models.Appointment)
      // define association here


    }
  }
  Consultation_Type.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.TIME,
    price: DataTypes.DOUBLE,
    patient_visible: DataTypes.BOOLEAN,
    previous_appointment: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Consultation_Type',
  });
  return Consultation_Type;
};