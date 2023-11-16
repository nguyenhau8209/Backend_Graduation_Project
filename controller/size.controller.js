const STATUS_CODE = require("../constants/httpResponseCode");
const sizeRepo = require("../repositories/size.repo");
const sizeService = require("../services/size.service");

const createSize = async (req, res) => {
  try {
    const data = await sizeService.createSize(req.body);
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

const findSizes = async (req, res) => {
  try {
    const data = await sizeService.findSizes();
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

const findSize = async (req, res) => {
  try {
    const data = await sizeService.findSize(req.params);
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

const updateSize = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const data = await sizeService.updateSize({ id, name });
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

const deleteSize = async (req, res) => {
  try {
    const data = await sizeService.deleteSize(req.params);
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
const sizeController = {
  createSize,
  findSizes,
  findSize,
  updateSize,
  deleteSize,
};
module.exports = sizeController;
