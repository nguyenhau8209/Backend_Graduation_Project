"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Information.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      customerId: DataTypes.INTEGER,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      commune: DataTypes.STRING,
      street: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Information",
      paranoid: true,
      timestamps: true,
    }
  );
  return Information;
};
