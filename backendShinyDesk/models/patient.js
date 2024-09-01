'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Patient.hasMany(models.Tooth);
      Patient.hasMany(models.Family_History);
      Patient.hasMany(models.Diagnosis);
      Patient.belongsToMany(models.Treatment, { through: 'Treatment_Patients', as: 'Treatments' });
      Patient.hasMany(models.Appointment, {
        onDelete: 'CASCADE',
      });
      Patient.belongsTo(models.User, {
        onDelete: 'CASCADE',
      });
      models.User.hasOne(Patient);
      // define association here
    }
  }
  Patient.init({
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    second_last_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    identification_card_number: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    special_notes: DataTypes.TEXT,
    occupation: DataTypes.STRING,
    enrollment_date: DataTypes.DATE,
    responsible_phone_number: DataTypes.STRING,
    responsible_person_name: DataTypes.STRING,
    eps: DataTypes.STRING,
    birth_place: DataTypes.STRING,
    usual_residence: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};