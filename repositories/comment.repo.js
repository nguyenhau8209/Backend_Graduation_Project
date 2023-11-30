const db = require("../models");

const createComment = async ({ rate, content, customerId, productId }) => {
  return await db.Comment.create({ rate, content, customerId, productId });
};

const getComment = async (filter = {}) => {
  return await db.Comment.findAll({
    where: filter,
    attributes: {
      exclude: ["id", "rate", "content"],
    },
    include: [
        {model: db.Product, as: "productData", attributes: ["id"]},
        {model: db.User, as: "userData", attributes: ["userId", "name", "picture"]}
    ]
  });
};

const commentRepo = {
  createComment,
  getComment
};

module.exports = commentRepo;
