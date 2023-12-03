const commentRepo = require("../repositories/comment.repo");
const productRepo = require("../repositories/product.repo");
const imageCommentRepo = require("../repositories/imageComment.repo");

const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleSuccess,
  handleCreate,
} = require("../utils/handleReturn");
const urlUploadImage = require("../utils/cloudinary");

const createComment = async (data, dataUser, dataImage) => {
  try {
    const { rate, content, productId } = data;
    const { image } = dataImage;

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

    image.forEach(async (element) => {
      const cloudFile = await urlUploadImage(element.tempFilePath, element);
      await imageCommentRepo.createImageComment({
        image: cloudFile,
        commentId: createComment.id,
      });
    });
    return handleCreate("Thanh cong", createComment);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getComment = async () => {
  try {
    const dataComment = await commentRepo.getComment();

    if (!dataComment) {
      return handleNotFound("Khong tim thay comment");
    }
    return handleSuccess("thanh cong", dataComment);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const commentService = {
  createComment,
  getComment,
};

module.exports = commentService;
