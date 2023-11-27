const STATUS_CODE = require("../constants/httpResponseCode");
const cartItemService = require("../services/cartItem.service");

const createCartItem = async (req, res) => {
  try {
    const data = await cartItemService.createCartItem(req.body, req.loginUser);
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
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const data = await cartItemService.getCartItems();
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
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};

const getCartItem = async (req, res) => {
  try {
    const data = await cartItemService.getCartItem(req.params);
    if (data?.error) {
      return res.status(data?.status).json({
        status: data?.status,
        message: data?.message,
      });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const data = await cartItemService.deleteCartItem(req.params);
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
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};
const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { productSizeColorId } = req.body;
    const data = await cartItemService.updateCartItem({
      id,
      productSizeColorId,
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
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};
const cartItemController = {
  createCartItem,
  getCartItem,
  getCartItems,
  updateCartItem,
  deleteCartItem,
};

module.exports = cartItemController;
