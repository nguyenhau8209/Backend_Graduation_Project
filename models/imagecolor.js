"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImageColor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImageColor.init(
    {
      imageUrl: DataTypes.STRING,
      colorId: DataTypes.INTEGER,
      prodctId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ImageColor",
      paranoid: true,
      timestamps: true,
    }
  );
  return ImageColor;
};
