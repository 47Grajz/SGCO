'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsToMany(models.Supply, { through: 'supplyAppointments', as: 'Supplies' });
      Appointment.belongsTo(models.Dentist);
      Appointment.belongsTo(models.Patient);
      Appointment.belongsTo(models.Secretary);
      Appointment.hasOne(models.Medical_History);
      Appointment.belongsTo(models.Consultation_Type);
      // define association here
    }
  }
  Appointment.init({
    notes: DataTypes.STRING,
    request_date: DataTypes.DATE,
    appointment_date_hour: DataTypes.DATE,
    modality: DataTypes.STRING,
    status: DataTypes.STRING,
    visible: DataTypes.BOOLEAN,
    DentistId: DataTypes.INTEGER,
    PatientId: DataTypes.INTEGER,
    SecretaryId: DataTypes.INTEGER,
    ConsultationTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};