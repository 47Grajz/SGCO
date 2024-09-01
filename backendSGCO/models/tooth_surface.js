'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tooth_Surface extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tooth_Surface.belongsTo(models.Tooth,
        {
          onDelete: 'CASCADE',
        });
      Tooth_Surface.belongsTo(models.Convention);
      Tooth_Surface.belongsTo(models.Medical_History, {
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Tooth_Surface.init({
    type: DataTypes.STRING,
    part: DataTypes.STRING,
    ConventionId: DataTypes.INTEGER,
    ToothId: DataTypes.INTEGER,
    MedicalHistoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tooth_Surface',
  });
  return Tooth_Surface;
};