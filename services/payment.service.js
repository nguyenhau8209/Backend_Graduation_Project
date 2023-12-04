const paymentRepo = require("../repositories/payment.repo");

const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleCreate,
  handleSuccess,
} = require("../utils/handleReturn");

const statistics = async (data) => {
  try {
    const { startDate, endDate, filter } = data;

    if (!startDate || !endDate || !filter) {
      return handleBadRequest("Khong duoc de trong startDate hoac endDate, thieu phuong thuc filter");
    }

    if (endDate < startDate) {
        return handleBadRequest("endDate khong duoc nho hon startDate");
    }

    const statistics = await paymentRepo.statistics({ startDate, endDate, filter });
    if (!statistics) {
      return handleNotFound("Khong tim thay payment");
    }
    return handleSuccess("thanh cong", statistics);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const orderService = {
  statistics,
};

module.exports = orderService;
