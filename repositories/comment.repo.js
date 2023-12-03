const db = require("../models");

const createComment = async ({ rate, content, customerId, productId }) => {
  return await db.Comment.create({ rate, content, customerId, productId });
};

const getComment = async (filter = {}) => {
  return await db.Comment.findAll({
    where: filter,
    include: [
      {
        model: db.Customer,
        as: "CustomerCommentData",
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        include: [
          {
            model: db.User,
            as: "customerData",
            attributes: {
              exclude: ["createdAt", "updatedAt", "deletedAt"],
            },
          },
        ],
      },
      {
        model: db.ImageComment,
        as: "imageCommentData",
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      },
    ],
  });
};

const commentRepo = {
  createComment,
  getComment,
};

module.exports = commentRepo;
