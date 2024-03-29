"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.hasMany(models.ImageComment, {
        foreignKey: "commentId",
        targetKey: "id",
        as: "imageCommentData",
      });
      Comment.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
        as: "ProductCommentData",
      });
      Comment.belongsTo(models.Customer, {
        foreignKey: "customerId",
        targetKey: "id",
        as: "CustomerCommentData",
      });
    }
  }
  Comment.init(
    {
      rate: DataTypes.INTEGER,
      content: DataTypes.STRING,
      customerId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
      paranoid: true,
      timestamps: true,
    }
  );
  return Comment;
};
