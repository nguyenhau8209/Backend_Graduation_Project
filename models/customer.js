"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "customerData"
      })
      Customer.hasMany(models.Order, {
        foreignKey: "customerId",
        targetKey: "id",
        as: "customerOrderData",
      });
    }
  }
  Customer.init(
    {
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
      paranoid: true,
      timestamps: true,
    }
  );
  return Customer;
};
