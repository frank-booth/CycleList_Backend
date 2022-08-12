"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.Rider, { foreignKey: "riderId" });
    }
  }
  Song.init(
    {
      title: DataTypes.STRING,
      artist: DataTypes.STRING,
      genre: DataTypes.STRING,
      length: DataTypes.STRING,
      riderId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "riders",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Song",
      tableName: "songs",
    }
  );
  return Song;
};
