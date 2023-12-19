'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DeviceToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DeviceToken.init({
    customerId: DataTypes.INTEGER,
    deviceToken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DeviceToken',
    paranoid: true,
    timestamps: true,
  });
  return DeviceToken;
};