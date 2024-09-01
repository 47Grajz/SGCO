'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnosis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Diagnosis.belongsTo(models.Patient, {
        onDelete: 'CASCADE',
      });
      Diagnosis.belongsTo(models.Medical_History, {
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Diagnosis.init({
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    PatientId: DataTypes.INTEGER,
    MedicalHistoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Diagnosis',
  });
  return Diagnosis;
};