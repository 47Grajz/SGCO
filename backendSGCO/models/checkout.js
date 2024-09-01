'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class checkout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  checkout.init({
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    income: DataTypes.DOUBLE,
    expenditure: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'checkout',
  });
  return checkout;
};