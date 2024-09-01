'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Supply.belongsToMany(models.Appointment,  {through: 'Supply_Appointments', as: 'Appointments'});
      // define association here
    }
  }
  Supply.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Supply',
  });
  return Supply;
};