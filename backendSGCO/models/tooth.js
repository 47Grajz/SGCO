'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tooth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tooth.belongsTo(models.Patient, {
        onDelete: 'CASCADE',
      });
      Tooth.hasMany(models.Tooth_Surface);
      // define association here
    }
  }
  Tooth.init({
    number: DataTypes.INTEGER,
    type: DataTypes.STRING,
    status_ini_evo: DataTypes.STRING,
    PatientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tooth',
  });
  return Tooth;
};