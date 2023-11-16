const STATUS_CODE = require("../constants/httpResponseCode");
const imageColorService = require("../services/imageColor.service");

const createImageColor = async (req, res) => {
  try {
    const { imageUrl } = req.files;
    const { colorId, productId } = req.body;

    const data = await imageColorService.createImageColor({
      imageUrl,
      colorId,
      productId,
    });
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

const getImageColors = async (req, res) => {
  try {
    const data = await imageColorService.getImageColors();
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

const getImageColor = async (req, res) => {
  try {
    const data = await imageColorService.getImageColor(req.params);
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

const deleteImageColor = async (req, res) => {
  try {
    const data = await imageColorService.deleteImageColor(req.params);
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

const updateImageColor = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await imageColorService.updateImageColor(
      id,
      req.body,
      req.files
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

const imageColorController = {
  createImageColor,
  updateImageColor,
  deleteImageColor,
  getImageColor,
  getImageColors,
};

module.exports = imageColorController;
