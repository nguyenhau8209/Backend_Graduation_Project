"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiscountCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DiscountCode.init(
    {
      code: DataTypes.STRING,
      discountType: DataTypes.INTEGER,
      discountAmount: DataTypes.DOUBLE,
      expiryDate: DataTypes.DATE,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "DiscountCode",
      paranoid: true,
      timestamps: true,
    }
  );
  return DiscountCode;
};
