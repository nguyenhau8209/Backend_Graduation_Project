"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cartItem.init(
    {
      cartId: DataTypes.INTEGER,
      productSizeMauId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CartItem",
      paranoid: true,
      timestamps: true,
    }
  );
  return cartItem;
};
