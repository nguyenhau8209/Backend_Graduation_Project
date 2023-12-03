//Viết hàm Create
const db = require("../models");

const createImageComment = async ({ image, commentId }) => {
  return await db.ImageComment.create({ image, commentId });
};

const ImageComment = {
  createImageComment,
};

module.exports = ImageComment;
