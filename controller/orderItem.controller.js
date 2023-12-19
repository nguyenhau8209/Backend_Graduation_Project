const STATUS_CODE = require("../constants/httpResponseCode");
const orderItemService = require("../services/orderItem.service");

const createOrderItem = async (req, res) => {
    try {
        let ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        const data = await orderItemService.createOrderItem(
            req.body,
            req.loginUser,
            ipAddr
        );
        if (data?.error) {
            return res
                .status(data?.status)
                .json({status: data?.status, message: data?.message});
        }
        return res
            .status(data?.status)
            .json({status: data?.status, data: data?.data, message: data?.message});
    } catch (error) {
        return res
            .status(STATUS_CODE.errorServer)
            .json({status: STATUS_CODE.errorServer, message: error?.message});
    }
};



const orderItemController = {createOrderItem};

module.exports = orderItemController;
