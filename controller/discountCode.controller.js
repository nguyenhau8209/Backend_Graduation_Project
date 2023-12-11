const STATUS_CODE = require("../constants/httpResponseCode");
const discountCodeService = require("../services/discountCode.service");

const createDiscountCode = async (req, res) => {
  try {
    const data = await discountCodeService.createDiscountCode(req.body);
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const getDiscountCodes = async (req, res) => {
  try {
    const data = await discountCodeService.getDiscountCodes();
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const getDiscountCode = async (req, res) => {
  try {
    const data = await discountCodeService.getDiscountCode(req.params);
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const deleteDiscountCode = async (req, res) => {
  try {
    const data = await discountCodeService.deleteDiscountCode(req.params);
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const updateDiscountCode = async (req, res) => {
  try {
    const data = await discountCodeService.updateDiscountCode(
      req.params,
      req.body
    );
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const discountCodeController = {
  createDiscountCode,
  updateDiscountCode,
  deleteDiscountCode,
  getDiscountCode,
  getDiscountCodes,
};
module.exports = discountCodeController;
