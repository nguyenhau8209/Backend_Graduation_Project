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
  const findCategory = await categoryRepo.findOneCategory({ name });
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

const findCategories = async () => {
  const listCategories = await categoryRepo.findCategories();
  if (!listCategories) {
    return {
      error: true,
      status: STATUS_CODE.notFounded,
      message: "That bai",
    };
  }
  return {
    error: false,
    status: STATUS_CODE.success,
    data: listCategories,
    message: "Thanh cong",
  };
};

const findOneCategory = async (data) => {
  const { id } = data;
  if (!id) {
    return {
      error: true,
      status: STATUS_CODE.badRequest,
      message: "name thi khong duoc de trong",
    };
  }
  try {
    const findUser = await categoryRepo.findOneCategory({ id });
    if (!findUser || findUser.dataValues.delete_flag) {
      return {
        error: true,
        status: STATUS_CODE.notFounded,
        message: "Khong tim thay category",
      };
    }
    return {
      error: false,
      status: STATUS_CODE.success,
      data: findUser.dataValues,
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

const updateCategory = async (data) => {
  console.log(data);
  const { id, name, image } = data;
  if (!id || !name || !image) {
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
    if (findOneCategory.dataValues.delete_flag) {
      return {
        error: true,
        status: STATUS_CODE.notFounded,
        message: "Khong tim thay category",
      };
    }
    const findNameCategory = await categoryRepo.findOneCategory({ name });
    if (findNameCategory && !findNameCategory.dataValues.delete_flag) {
      return {
        error: true,
        status: STATUS_CODE.badRequest,
        message: "category da ton tai",
      };
    }

    const updateCategory = await categoryRepo.updateCategory(
      { id },
      { name, image }
    );
    if (!updateCategory) {
      return {
        error: true,
        status: STATUS_CODE.badRequest,
        message: "Cap nhat that bai",
      };
    }
    const findAfterUpdate = await categoryRepo.findOneCategory({ id });
    return {
      error: false,
      status: STATUS_CODE.success,
      data: findAfterUpdate,
      message: "cap nhat thanh cong",
    };
  } catch (error) {
    return {
      error: true,
      status: STATUS_CODE.errorServer,
      message: error.message,
    };
  }
};

const deleteCategory = async (data) => {
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
    if (!findOneCategory || findOneCategory.dataValues.delete_flag) {
      return {
        error: true,
        status: STATUS_CODE.notFounded,
        message: "Khong tim thay category",
      };
    }
    const deleteCategory = await categoryRepo.deleteCategory({ id });
    if (!deleteCategory) {
      return {
        error: true,
        status: STATUS_CODE.badRequest,
        message: "Xoa khong thanh cong",
      };
    }
    return {
      error: false,
      status: STATUS_CODE.success,
      message: "Xoa thanh cong",
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
};

module.exports = categoryService;
