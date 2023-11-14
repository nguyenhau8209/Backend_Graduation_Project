const imageColorRepo = require("../repositories/imageColor.repo");
const productSizeColorRepo = require("../repositories/productSizeColor.repo");
const {
  handleServerError,
  handleBadRequest,
  handleCreate,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const createProductSizeColor = async (data) => {
  try {
    const { productId, sizeId, colorId, amount, price } = data;
    if (!productId || !sizeId || !colorId || !amount || !price) {
      return handleBadRequest("Khong duoc de trong");
    }
    const createProductSizeColor =
      await productSizeColorRepo.createProductSizeColor({
        productId,
        sizeId,
        colorId,
        amount,
        price,
      });
    if (!createProductSizeColor) {
      return handleBadRequest("Khong thanh cong");
    }
    return handleCreate("Thanh cong", createProductSizeColor);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const getProductSizeColors = async () => {
  const getProductSizeColors =
    await productSizeColorRepo.getProductSizeColors();
  if (!getProductSizeColors) {
    return handleNotFound("Khong tim thay");
  }
  return handleSuccess("Thanh cong", getProductSizeColors);
};

const getProductSizeColor = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const getProductSizeColor = await productSizeColorRepo.getProductSizeColor({
      id,
    });
    if (!getProductSizeColor) {
      return handleNotFound("Khong tim thay");
    }
    console.log(getProductSizeColor.dataValues.colorId);
    const getImageUrl = await imageColorRepo.getImageColor({
      colorId: getProductSizeColor.dataValues.colorId,
      productId: getProductSizeColor.dataValues.productId,
    });
    console.log(
      getImageUrl.dataValues.imageUrl,
      getProductSizeColor.dataValues.colorId,
      getProductSizeColor.dataValues.productId
    );
    return handleSuccess("Thanh cong", {
      getProductSizeColor,
      imageUrl: getImageUrl.dataValues.imageUrl,
    });
  } catch (error) {
    return handleServerError(error.message);
  }
};

const deleteProductSizeColor = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const deleteProductSizeColor =
      await productSizeColorRepo.deleteProductSizeColor({
        id,
      });
    if (!deleteProductSizeColor) {
      return handleNotFound("Khong tim thay");
    }
    return handleSuccess("Thanh cong");
  } catch (error) {
    return handleServerError(error.message);
  }
};

const updateProductSizeColor = async (id, data) => {
  try {
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const getProductSizeColor = await productSizeColorRepo.getProductSizeColor(
      id
    );
    if (!getProductSizeColor) {
      return handleNotFound("Khong tim thay");
    }
    const updateProductSizeColor =
      await productSizeColorRepo.updateProductSizeColor(id, data);
    if (!updateProductSizeColor) {
      return handleBadRequest("Update that bai");
    }
    const findAfterUpdate = await productSizeColorRepo.getProductSizeColor(id);
    return handleSuccess("Thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error.message);
  }
};
const productSizeColorService = {
  createProductSizeColor,
  getProductSizeColor,
  getProductSizeColors,
  updateProductSizeColor,
  deleteProductSizeColor,
};
module.exports = productSizeColorService;
