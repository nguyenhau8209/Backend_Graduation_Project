const sizeRepo = require("../repositories/size.repo");
const {
  handleServerError,
  handleBadRequest,
  handleCreate,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const createSize = async (data) => {
  try {
    const { name } = data;
    if (!name) {
      return handleBadRequest("Khong duoc de trong");
    }
    const findSize = await sizeRepo.findSize({ name });
    if (findSize) {
      return handleBadRequest("Size da ton tai");
    }
    const createSize = await sizeRepo.createSize({ name });
    if (!createSize) {
      return handleBadRequest("Khong thanh cong");
    }
    return handleCreate("Thanh cong", createSize);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const findSizes = async () => {
  try {
    const findSizes = await sizeRepo.findSizes();
    if (!findSizes) {
      return handleNotFound("Khong tim thay");
    }
    return handleSuccess("Thanh cong", findSizes);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const findSize = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong");
    }
    const findSize = await sizeRepo.findSize({ id });
    if (!findSize) {
      return handleNotFound("Khong tim thay");
    }
    return handleSuccess("Thanh cong", findSize);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const updateSize = async (data) => {
  try {
    const { id, name } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    if (name === "") {
      return handleBadRequest("Name khong duoc de trong");
    }
    const findSize = await sizeRepo.findSize({ id });
    if (!findSize) {
      return handleNotFound("Khong tim thay");
    }
    if (name) {
      const findByName = await sizeRepo.findSize({ name });
      if (findByName) {
        return handleBadRequest("Size da ton tai");
      }
    }
    const updateSize = await sizeRepo.updateSize({ id }, { name });
    if (!updateSize) {
      return handleBadRequest("Cap nhat khong thanh cong");
    }
    const findAfterUpdate = await sizeRepo.findSize({ id });
    return handleSuccess("Thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const deleteSize = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findSize = await sizeRepo.findSize({ id });
    if (!findSize) {
      return handleNotFound("Khong tim thay");
    }
    const deleteSize = await sizeRepo.deleteSize({ id });
    if (!deleteSize) {
      return handleBadRequest("Khong thanh cong");
    }
    return handleSuccess("Xoa thanh cong");
  } catch (error) {
    return handleServerError(error.message);
  }
};
const sizeService = {
  createSize,
  findSize,
  findSizes,
  updateSize,
  deleteSize,
};

module.exports = sizeService;
