const commentRepo = require("../repositories/comment.repo");
const productRepo = require("../repositories/product.repo");

const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const createComment = async (data, dataUser) => {
  try {
    const { rate, content, productId } = data;

    if (!rate || !productId) {
      return handleBadRequest("Phai danh gia sao, khong tim thay productId");
    }

    const findProduct = await productRepo.findProducts({ id: productId });

    if (!findProduct) {
      return handleNotFound("Khong tim thay findProduct");
    }

    const createComment = await commentRepo.createComment({
      rate,
      content,
      customerId: dataUser?.customerId,
      productId,
    });
    if (!createComment) {
      return handleBadRequest("Tao comment khong thanh cong");
    }
    return handleCreate("Thanh cong", createComment);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const commentService = {
  createComment,
};

module.exports = commentService;
