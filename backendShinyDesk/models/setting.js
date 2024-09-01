'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Setting.belongsTo(models.Dentist);
      // define association here
    }
  }
  Setting.init({
    emailNotifications: DataTypes.BOOLEAN,
    appointmentNotifications: DataTypes.BOOLEAN,
    weekdayStartTime: DataTypes.TIME,
    weekdayEndTime: DataTypes.TIME,
    saturdayStartTime: DataTypes.TIME,
    saturdayEndTime: DataTypes.TIME,
    DentistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Setting',
  });
  return Setting;
};