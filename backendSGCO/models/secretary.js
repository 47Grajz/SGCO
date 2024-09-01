'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Secretary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Secretary.hasMany(models.Appointment,
        {
          onDelete: 'CASCADE',
        });
      Secretary.belongsTo(models.User, {
        onDelete: 'CASCADE',
      })
      // define association here
    }
  }
  Secretary.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Secretary',
  });
  return Secretary;
};