'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Treatment.belongsToMany(models.Patient,  {through: 'Treatment_Patients', as: 'Patients'}, 
      {
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Treatment.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};