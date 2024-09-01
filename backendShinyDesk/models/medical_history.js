'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medical_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Medical_History.belongsTo(models.Appointment, {
        onDelete: 'CASCADE'
      });
      Medical_History.hasMany(models.Tooth_Surface);
      // define association here
    }
  }
  Medical_History.init({
    date: DataTypes.DATE,
    observations: DataTypes.TEXT,
    status: DataTypes.STRING,
    AppointmentId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Medical_History',
  });
  return Medical_History;
};