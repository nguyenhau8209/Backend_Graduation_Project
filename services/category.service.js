const STATUS_CODE = require("../constants/httpResponseCode");
const categoryRepo = require("../repositories/category.repo");

const createCategory = async (data) => {
  const { name, image } = data;
  if (!name || !image) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "Vui long nhap du du lieu",
    };
  }
  const findCategory = await categoryRepo.findOneCategories({ name });
  if (findCategory) {
    if (findCategory?.dataValues?.delete_flag) {
      const updateCategory = await categoryRepo.updateCategory(
        { name: name },
        { image: image, delete_flag: false }
      );
      return {
        error: false,
        status: STATUS_CODE.success,
        message: "Tao category thanh cong",
      };
    }
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "Category da ton tai",
    };
  }
  const newCategory = await categoryRepo.createCategory({ name, image });
  return {
    error: false,
    status: STATUS_CODE.created,
    data: newCategory,
    message: "Tao category thanh cong",
  };
};

const categoryService = {
  createCategory,
};

module.exports = categoryService;
