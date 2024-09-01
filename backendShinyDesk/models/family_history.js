'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Family_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Family_History.belongsTo(models.Patient, {
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Family_History.init({
    disease: DataTypes.STRING,
    last_visit_date: DataTypes.DATE,
    PatientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Family_History',
  });
  return Family_History;
};