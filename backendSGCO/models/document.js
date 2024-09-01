'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Document.belongsTo(models.User, {
        onDelete: 'CASCADE',
      });
      // define association here
    }
  }
  Document.init({
    file_type: DataTypes.STRING,
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    file_path: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};