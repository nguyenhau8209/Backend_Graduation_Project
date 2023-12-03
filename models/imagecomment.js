'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImageComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ImageComment.init({
    image: DataTypes.STRING,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImageComment',
    paranoid: true,
    timestamps: true,
  });
  return ImageComment;
};