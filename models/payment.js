"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      orderId: DataTypes.INTEGER,
      paymentType: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      detailedStatus: DataTypes.INTEGER,
      total: DataTypes.DOUBLE,
      transaction: DataTypes.STRING,
      discountCode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payment",
      paranoid: true,
      timestamps: true,
    }
  );
  return Payment;
};
