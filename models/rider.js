"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Rider.hasMany(models.Song, { foreignKey: "riderId" });
    }
  }
  Rider.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      userName: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
      riderImage: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Rider",
      tableName: "riders",
    }
  );
  return Rider;
};
