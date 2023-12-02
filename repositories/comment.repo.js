const db = require("../models");

const createComment = async ({ rate, content, customerId, productId }) => {
  return await db.Comment.create({ rate, content, customerId, productId });
};

const getComment = async (filter = {}) => {
  return await db.Comment.findAll({
    where: filter,
    include: [
      {
        model: db.Product,
        as: "ProductCommentData",
      },
      {
        model: db.Customer,
        as: "CustomerCommentData",
        include: [
          {model: db.User,
          as: ""}
        ]
      },
    ],
  });
};

const commentRepo = {
  createComment,
  getComment,
};

module.exports = commentRepo;
