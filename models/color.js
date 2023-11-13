"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Color.hasMany(models.ProductSizeColor, {
        foreignKey: "colorId",
        sourceKey: "id",
        as: "colorData",
        targetKey: "id", // Thêm dòng này
      });
      Color.hasOne(models.ImageColor, {
        foreignKey: "colorId",
        targetKey: "id",
        as: "imageColorData",
      });
    }
  }
  Color.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Color",
      paranoid: true,
      timestamps: true,
    }
  );
  return Color;
};
