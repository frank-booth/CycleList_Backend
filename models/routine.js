'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Routine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Routine.init({
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Routine',
    tableName:'routines'
  });
  return Routine;
};