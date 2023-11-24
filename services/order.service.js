const customerRepo = require("../repositories/customer.repo");
const orderRepo = require("../repositories/order.repo");
const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleCreate,
  handleSuccess,
} = require("../utils/handleReturn");

const createOrder = async (data) => {
  try {
    const { customerId } = data;
    if (!customerId) {
      return handleBadRequest("Khong duoc de trong customerId");
    }
    const findCustomer = await customerRepo.getCustomer({ id: customerId });
    if (!findCustomer) {
      return handleNotFound("Khong tim thay customer");
    }
    const createOrder = await orderRepo.createOrder({ customerId });
    if (!createOrder) {
      return handleBadRequest("Tao order that bai");
    }
    return handleCreate("Thanh cong", createOrder);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getOrder = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findOrder = await orderRepo.getOrder({ id });
    if (!findOrder) {
      return handleNotFound("Khong tim thay order");
    }
    return handleSuccess("Thanh cong", findOrder);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getOrders = async () => {
  try {
    const findOrders = await orderRepo.getOrders();
    if (!findOrders) {
      return handleNotFound("Khong tim thay orders");
    }
    return handleSuccess("Thanh cong", findOrders);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const deleteOrder = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findOrder = await orderRepo.getOrder({ id });
    if (!findOrder) {
      return handleNotFound("Khong tim thay order");
    }
    const deleteOrder = await orderRepo.deleteOrder({ id });
    if (!deleteOrder) {
      return handleBadRequest("Xoa that bai");
    }
    return handleSuccess("Xoa thanh cong");
  } catch (error) {
    return handleServerError(error?.message);
  }
};
const orderService = { createOrder, getOrder, getOrders, deleteOrder };

module.exports = orderService;
