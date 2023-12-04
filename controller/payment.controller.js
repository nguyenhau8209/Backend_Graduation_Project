const STATUS_CODE = require("../constants/httpResponseCode");
const paymentService = require("../services/payment.service");

const statistics = async (req, res) => {
  try {
    const data = await paymentService.statistics(req.query);

    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, message: data?.message, data: data?.data });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};

const commentController = {
  statistics,
};

module.exports = commentController;
