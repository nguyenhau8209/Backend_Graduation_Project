const STATUS_CODE = require("../constants/httpResponseCode");
const productSizeColorService = require("../services/productSizeColor.service");

const createProductSizeColor = async (req, res) => {
  try {
    const data = await productSizeColorService.createProductSizeColor(req.body);
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

const getProductSizeColors = async (req, res) => {
  try {
    const data = await productSizeColorService.getProductSizeColors();
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

const getProductSizeColor = async (req, res) => {
  try {
    const data = await productSizeColorService.getProductSizeColor(req.params);
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

const deleteProductSizeColor = async (req, res) => {
  try {
    const data = await productSizeColorService.deleteProductSizeColor(
      req.params
    );
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

const updateProductSizeColor = async (req, res) => {
  try {
    const data = await productSizeColorService.updateProductSizeColor(
      req.params,
      req.body
    );
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
const productSizeColorController = {
  createProductSizeColor,
  getProductSizeColor,
  getProductSizeColors,
  updateProductSizeColor,
  deleteProductSizeColor,
};

module.exports = productSizeColorController;
