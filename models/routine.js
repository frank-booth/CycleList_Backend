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
      Routine.belongsTo(models.Song, { foreignKey: "songId" })
    }
  }
  Routine.init({
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    songId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "songs",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Routine',
    tableName:'routines'
  });
  return Routine;
};