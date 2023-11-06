const STATUS_CODE = require("../constants/httpResponseCode");
const categoryService = require("../services/category.service");

const createCategory = async (req, res) => {
  try {
    const data = await categoryService.createCategory(req.body);
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

const categoryController = {
  createCategory,
};

module.exports = categoryController;
