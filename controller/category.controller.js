const STATUS_CODE = require("../constants/httpResponseCode");
const categoryService = require("../services/category.service");

const createCategory = async (req, res) => {
  try {
    const { image } = req.files;
    const { name } = req.body;
    const data = await categoryService.createCategory({ name, image });
    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error.message });
  }
};

const findCategories = async (req, res) => {
  try {
    const data = await categoryService.findCategories();

    if (data?.error) {
      return res
        .status(data.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error.message });
  }
};
const findOneCategory = async (req, res) => {
  try {
    const data = await categoryService.findOneCategory(req.params);
    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await categoryService.updateCategory(id, req.body, req.files);
    // console.log(data);
    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const data = await categoryService.deleteCategory(req.params);
    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error.message });
  }
};

const restoreCategory = async (req, res) => {
  try {
    const data = await categoryService.restoreCategory(req.params);
    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error.message });
  }
};
const categoryController = {
  createCategory,
  findCategories,
  findOneCategory,
  updateCategory,
  deleteCategory,
  restoreCategory,
};

module.exports = categoryController;
