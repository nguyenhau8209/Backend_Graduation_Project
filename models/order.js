"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasMany(models.OrderItem, {
        foreignKey: "orderId",
        targetKey: "id",
        as: "orderItemData",
      });
    }
  }
  Order.init(
    {
      customerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
      paranoid: true,
      timestamps: true,
    }
  );
  return Order;
};