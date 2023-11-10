const STATUS_CODE = require("../constants/httpResponseCode");
const productRepo = require("../repositories/product.repo");
const uploadImage = require("../utils/cloudinary");

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
  const cloudFile = await uploadImage(
    mainImage.tempFilePath,
    mainImage,
    "Product-image"
  );
  if (!cloudFile) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "Loi upload anh",
    };
  }
  const newProduct = await productRepo.createProduct({
    name,
    mainImage: cloudFile.url,
    categoryId,
  });
  return {
    error: false,
    status: STATUS_CODE.created,
    data: newProduct,
    message: "Tao Product thanh cong",
  };
};

const updateProduct = async (id, data) => {
  console.log(id, data);
  if (!id) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "id khong duoc de trong",
    };
  }
  try {
    const findProduct = await productRepo.findOneProduct({ id });
    if (!findProduct) {
      return {
        error: true,
        status: STATUS_CODE.notFounded,
        message: "Khong tim thay san pham",
      };
    }
    const updateProduct = await productRepo.updateProduct({ id }, data);

    if (!updateProduct) {
      return {
        error: true,
        status: STATUS_CODE.badRequest,
        message: "Cap nhat that bai",
      };
    }
    const findAfterUpdate = await productRepo.findOneProduct({ id });
    return {
      error: false,
      status: STATUS_CODE.success,
      data: findAfterUpdate,
      message: "Cap nhat thanh cong",
    };
  } catch (error) {
    return {
      error: true,
      status: STATUS_CODE.errorServer,
      message: error.message,
    };
  }
};
const productService = {
  findProducts,
  findOneProduct,
  createProduct,
  updateProduct,
};

module.exports = productService;
