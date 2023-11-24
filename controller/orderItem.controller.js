const STATUS_CODE = require("../constants/httpResponseCode");
const orderItemService = require("../services/orderItem.service");

const createOrderItem = async (req, res) => {
  try {
    const data = await orderItemService.createOrderItem(req.body);
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

const orderItemController = { createOrderItem };

module.exports = orderItemController;
