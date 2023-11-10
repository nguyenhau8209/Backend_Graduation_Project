"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductSizeColor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductSizeColor.init(
    {
      productId: DataTypes.INTEGER,
      sizeId: DataTypes.INTEGER,
      colorId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "ProductSizeColor",
      paranoid: true,
      timestamps: true,
    }
  );
  return ProductSizeColor;
};
