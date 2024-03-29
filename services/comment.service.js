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
  console.log(dataUser)
  try {
    const { rate, content, productId } = data;


    if (!rate || !productId) {
      return handleBadRequest("Phai danh gia sao, khong tim thay productId");
    }

    const findProduct = await productRepo.findProducts({ id: productId });

    if (!findProduct) {
      return handleNotFound("Khong tim thay findProduct");
    }

    let createComment = null;


    if (dataImage && dataImage.image && dataImage.image.length > 0) {
      createComment = await commentRepo.createComment({
        rate,
        content,
        customerId: dataUser?.customerId,
        productId,
      });

      if (!createComment) {
        return handleBadRequest("Tao comment khong thanh cong");
      }

      for (const element of dataImage.image) {
        const cloudFile = await urlUploadImage(element.tempFilePath, element, "ImageComment");
        await imageCommentRepo.createImageComment({
          image: cloudFile,
          commentId: createComment.id,
        });
      }
    } else {
      createComment = await commentRepo.createComment({
        rate,
        content,
        customerId: dataUser?.customerId,
        productId,
      });

      if (!createComment) {
        return handleBadRequest("Tao comment khong thanh cong");
      }
    }

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
