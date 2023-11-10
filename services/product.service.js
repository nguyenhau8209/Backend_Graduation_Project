const STATUS_CODE = require("../constants/httpResponseCode");
const productRepo = require("../repositories/product.repo");
const urlUploadImage = require("../utils/cloudinary");
const uploadImage = require("../utils/cloudinary");
const {
  handleBadRequest,
  handleNotFound,
  handleSuccess,
  handleServerError,
} = require("../utils/handleReturn");

const findProducts = async () => {
  try {
    const findProducts = await productRepo.findProducts();
    if (!findProducts) {
      return {
        error: true,
        status: STATUS_CODE.notFounded,
        message: "Khong tim thay product",
      };
    }
    return {
      error: false,
      status: STATUS_CODE.success,
      data: findProducts,
      message: "Thanh cong",
    };
  } catch (error) {
    return {
      error: true,
      status: STATUS_CODE.errorServer,
      message: error.message,
    };
  }
};

const findOneProduct = async (data) => {
  const { id } = data;
  if (!id) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "name thi khong duoc de trong",
    };
  }
  try {
    const findProduct = await productRepo.findOneProduct({ id });
    if (!findProduct) {
      return {
        error: true,
        status: STATUS_CODE.notFounded,
        message: "Khong tim thay Product",
      };
    }
    return {
      error: false,
      status: STATUS_CODE.success,
      data: findProduct.dataValues,
      message: "Thanh cong",
    };
  } catch (error) {
    return {
      error: true,
      status: STATUS_CODE.errorServer,
      message: error.message,
    };
  }
};

const createProduct = async (data) => {
  const { name, mainImage, categoryId } = data;
  //   console.log(name, mainImage, categoryId);
  if (!name || !mainImage || !categoryId) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "Vui long nhap du du lieu",
    };
  }

  const findProduct = await productRepo.findOneProduct({ name });
  console.log("vao tim kiem");
  if (findProduct) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "Product da ton tai",
    };
  }
  const cloudFile = await urlUploadImage(mainImage.tempFilePath, mainImage);
  const newProduct = await productRepo.createProduct({
    name,
    mainImage: cloudFile,
    categoryId,
  });
  return {
    error: false,
    status: STATUS_CODE.created,
    data: newProduct,
    message: "Tao Product thanh cong",
  };
};

const updateProduct = async (id, data, mainImage) => {
  console.log(mainImage);
  if (!id) {
    return handleBadRequest("Khong duoc de trong");
  }
  try {
    const findOneProduct = await productRepo.findOneProduct({ id });
    if (!findOneProduct) {
      return handleNotFound("Khong tim thay category");
    }
    if (mainImage) {
      console.log(mainImage);
      const cloudFile = await urlUploadImage(
        mainImage.mainImage.tempFilePath,
        mainImage.mainImage
      );
      const updateProduct = await productRepo.updateProduct(
        { id },
        { data, mainImage: cloudFile }
      );
      if (!updateProduct) {
        return handleBadRequest("Cap nhat that bai");
      }
      const findAfterUpdate = await productRepo.findOneProduct({ id });
      return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
    }
    const updateProduct = await productRepo.updateProduct({ id }, { data });
    if (!updateProduct) {
      return handleBadRequest("Cap nhat that bai");
    }
    const findAfterUpdate = await productRepo.findOneProduct({ id });
    return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const deleteProduct = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong");
    }
    const findProduct = await productRepo.findOneProduct({ id });
    if (!findProduct) {
      return handleNotFound("Khong tim thay san pham");
    }
    const deleteProduct = await productRepo.deleteProduct({ id });
    if (!deleteProduct) {
      return handleBadRequest("Xoa khong thanh cong");
    }
    return handleSuccess("Xoa thanh cong");
  } catch (error) {
    return handleServerError(error.message);
  }
};
const productService = {
  findProducts,
  findOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

module.exports = productService;
