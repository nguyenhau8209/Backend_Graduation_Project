const STATUS_CODE = require("../constants/httpResponseCode");
const orderService = require("../services/order.service");

const createOrder = async (req, res) => {
  try {
    const data = await orderService.createOrder(req.body);
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

const getOrder = async (req, res) => {
  try {
    const data = await orderService.getOrder(req.params);
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

const getOrders = async (req, res) => {
  try {
    const data = await orderService.getOrders();
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
const getOrdersCustomer = async (req, res) => {
  try {
    const data = await orderService.getOrdersByCustomer(req.loginUser);
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

const getOrdersByCustomerId = async (req, res) => {
  try {
    const data = await orderService.getOrdersByCustomer(req.params);
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
const deleteOrder = async (req, res) => {
  try {
    const data = await orderService.deleteOrder(req.params);
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

const acceptOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const status = 2;
    const data = await orderService.updateStatusOrder(id, status);

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

const updateStatusOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await orderService.updateStatusOrder(id, status);
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
const orderController = { createOrder, getOrder, getOrders, deleteOrder, getOrdersCustomer,  acceptOrder, updateStatusOrder, getOrdersByCustomerId };

module.exports = orderController;
