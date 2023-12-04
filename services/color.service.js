const colorRepo = require("../repositories/color.repo");
const {
  handleServerError,
  handleBadRequest,
  handleCreate,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const createColor = async (data) => {
  try {
    const { name } = data;
    if (!name) {
      return handleBadRequest("Khong duoc de trong");
    }
    const findColor = await colorRepo.findColor({ name });
    if (findColor) {
      return handleBadRequest("Color da ton tai");
    }
    const createColor = await colorRepo.createColor({ name });
    if (!createColor) {
      return handleBadRequest("Khong thanh cong");
    }
    return handleCreate("Thanh cong", createColor);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const findColors = async () => {
  try {
    const findColors = await colorRepo.findColors();
    if (!findColors) {
      return handleNotFound("Khong tim thay");
    }
    return handleSuccess("Thanh cong", findColors);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const findColor = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong");
    }
    const findColor = await colorRepo.findColor({ id });
    if (!findColor) {
      return handleNotFound("Khong tim thay");
    }
    return handleSuccess("Thanh cong", findColor);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const updateColor = async (data) => {
  try {
    const { id, name } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    if (name === "") {
      return handleBadRequest("Name khong duoc de trong");
    }
    const findColor = await colorRepo.findColor({ id });
    if (!findColor) {
      return handleNotFound("Khong tim thay");
    }
    if (name) {
      const findByName = await colorRepo.findColor({ name });
      if (findByName) {
        return handleBadRequest("Size da ton tai");
      }
    }
    const updateColor = await colorRepo.updateColor({ id }, { name });
    if (!updateColor) {
      return handleBadRequest("Cap nhat khong thanh cong");
    }
    const findAfterUpdate = await colorRepo.findColor({ id });
    return handleSuccess("Thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const deleteColor = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findColor = await colorRepo.findColor({ id });
    if (!findColor) {
      return handleNotFound("Khong tim thay");
    }
    const deleteColor = await colorRepo.deleteColor({ id });
    if (!deleteColor) {
      return handleBadRequest("Khong thanh cong");
    }
    return handleSuccess("Xoa thanh cong");
  } catch (error) {
    return handleServerError(error.message);
  }
};
const colorService = {
  createColor,
  findColor,
  findColors,
  updateColor,
  deleteColor,
};

module.exports = colorService;
