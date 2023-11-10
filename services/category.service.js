const STATUS_CODE = require("../constants/httpResponseCode");
const categoryRepo = require("../repositories/category.repo");
const urlUploadImage = require("../utils/cloudinary");
const uploadImage = require("../utils/cloudinary");
const {
  handleBadRequest,
  handleNotFound,
  handleCreate,
  handleSuccess,
  handleServerError,
} = require("../utils/handleReturn");

const createCategory = async (data) => {
  const { name, image } = data;
  if (!name || !image) {
    return handleBadRequest("khong duoc de trong");
  }

  const findCategory = await categoryRepo.findOneCategory({ name });
  console.log(findCategory);
  if (findCategory) {
    return handleNotFound("Khong tim thay category");
  }
  const cloudFile = await urlUploadImage(image.tempFilePath, image);
  const newCategory = await categoryRepo.createCategory({
    name,
    image: cloudFile,
  });
  return handleCreate("Tao category thanh cong", newCategory);
};

const findCategories = async () => {
  const listCategories = await categoryRepo.findCategories();
  if (!listCategories) {
    return handleNotFound("Khong tim thay category");
  }
  return handleSuccess("Thanh cong", listCategories);
};

const findOneCategory = async (data) => {
  const { id } = data;
  if (!id) {
    return handleBadRequest("Khong duoc de trong");
  }
  try {
    const findCategory = await categoryRepo.findOneCategory({ id });
    if (!findCategory) {
      return handleNotFound("Khong tim thay category");
    }
    return handleSuccess("Thanh cong", findCategory);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const updateCategory = async (id, data, image) => {
  console.log(image);
  if (!id) {
    return handleBadRequest("Khong duoc de trong");
  }
  try {
    const findOneCategory = await categoryRepo.findOneCategory({ id });
    if (!findOneCategory) {
      return handleNotFound("Khong tim thay category");
    }
    if (data.name) {
      const findNameCategory = await categoryRepo.findOneCategory({
        name: data.name,
      });
      if (findNameCategory) {
        return handleBadRequest("Category da ton tai");
      }
    }

    if (image) {
      const cloudFile = await urlUploadImage(
        image.image.tempFilePath,
        image.image
      );
      const updateCategory = await categoryRepo.updateCategory(
        { id },
        { data, image: cloudFile }
      );
      if (!updateCategory) {
        return handleBadRequest("Cap nhat that bai");
      }
      const findAfterUpdate = await categoryRepo.findOneCategory({ id });
      return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
    }
    const updateCategory = await categoryRepo.updateCategory({ id }, { data });
    if (!updateCategory) {
      return handleBadRequest("Cap nhat that bai");
    }
    const findAfterUpdate = await categoryRepo.findOneCategory({ id });
    return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const deleteCategory = async (data) => {
  const { id } = data;
  if (!id) {
    return handleBadRequest("Khong duoc de trong");
  }
  try {
    const findOneCategory = await categoryRepo.findOneCategory({ id });
    if (!findOneCategory) {
      return handleNotFound("Khong tim thay category");
    }
    const deleteCategory = await categoryRepo.deleteCategory({ id });
    if (!deleteCategory) {
      return handleBadRequest("Xoa khong thanh cong");
    }
    return handleSuccess("Xoa thanh cong");
  } catch (error) {
    return handleServerError(error.message);
  }
};

const restoreCategory = async (data) => {
  const { id } = data;
  if (!id) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "Khong duoc de trong",
    };
  }
  try {
    const findOneCategory = await categoryRepo.findOneCategory({ id });
    if (!findOneCategory) {
      return {
        error: true,
        status: STATUS_CODE.notFounded,
        message: "Khong tim thay category",
      };
    }
    const restoreCategory = await categoryRepo.restoreCategory({ id });
    if (!restoreCategory) {
      return {
        error: true,
        status: STATUS_CODE.badRequest,
        message: "Khoi phuc khong thanh cong",
      };
    }
    return {
      error: false,
      status: STATUS_CODE.success,
      message: "Khoi phuc thanh cong",
    };
  } catch (error) {
    return {
      error: true,
      status: STATUS_CODE.errorServer,
      message: error.message,
    };
  }
};
const categoryService = {
  createCategory,
  findCategories,
  findOneCategory,
  updateCategory,
  deleteCategory,
  restoreCategory,
};

module.exports = categoryService;
