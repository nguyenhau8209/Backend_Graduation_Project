"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItem.belongsTo(models.Order, {
        foreignKey: "orderId",
        targetKey: "id",
        as: "orderItemData",
      });
      OrderItem.belongsTo(models.ProductSizeColor, {
        foreignKey: "productSizeColorId",
        targetKey: "id",
        as: "orderProductSizeColorData",
      });
    }
  }
  OrderItem.init(
    {
      orderId: DataTypes.INTEGER,
      productSizeColorId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "OrderItem",
      paranoid: true,
      timestamps: true,
    }
  );
  return OrderItem;
};
