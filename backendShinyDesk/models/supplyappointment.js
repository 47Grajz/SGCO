'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supply_Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supply_Appointment.init({
    AppointmentId: DataTypes.INTEGER,
    SupplyId: DataTypes.INTEGER,
    amount_spent: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'supplyAppointment',
  });
  return Supply_Appointment;
};