'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment_Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Treatment_Patient.init({
    PatientId: DataTypes.INTEGER,
    TreatmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Treatment_Patient',
  });
  return Treatment_Patient;
};