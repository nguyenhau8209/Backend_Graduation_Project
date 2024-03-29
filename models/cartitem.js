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
      cartItem.belongsTo(models.Cart, {
        foreignKey: "cartId",
        targetKey: "id",
        as: "cartItemData",
      });
      cartItem.belongsTo(models.ProductSizeColor, {
        foreignKey: "productSizeColorId",
        targetKey: "id",
        as: "cartProductSizeColorData",
      });
    }
  }
  cartItem.init(
    {
      cartId: DataTypes.INTEGER,
      productSizeColorId: DataTypes.INTEGER,
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
