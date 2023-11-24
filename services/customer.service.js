const customerRepo = require("../repositories/customer.repo");
const userRepo = require("../repositories/user.repo");
const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleCreate,
  handleSuccess,
} = require("../utils/handleReturn");

const createCustomer = async (data) => {
  try {
    const { userId } = data;
    if (!userId) {
      return handleBadRequest("Khong duoc de trong UserId");
    }
    const findUserId = await userRepo.getUserByCondition({ userId });
    if (!findUserId) {
      return handleNotFound("Khong tim thay user");
    }
    const createCustomer = await customerRepo.createCustomer({ userId });
    if (!createCustomer) {
      return handleBadRequest("Tao customer that bai");
    }
    return handleCreate("Tao customer thanh cong", createCustomer);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const deleteCustomer = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Id khong duoc de trong");
    }
    const getCustomer = await customerRepo.getCustomer({ id });
    if (!getCustomer) {
      return handleNotFound("Khong tim thay customer");
    }
    const deleteCustomer = await customerRepo.deleteCustomer({ id });
    if (!deleteCustomer) {
      return handleBadRequest("Xoa that bai");
    }
    return handleSuccess("Thanh cong");
  } catch (error) {
    return handleServerError(error?.message);
  }
};
const customerService = { createCustomer, deleteCustomer };

module.exports = customerService;
