const STATUS_CODE = require("../constants/httpResponseCode");
const orderService = require("../services/order.service");
const crypto = require("crypto");
const db = require("../models");

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
    const data = await orderService.getOrdersByCustomerId(req.params);
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

const filterOrders = async (req, res) => {
  try {
    const data = await orderService.filterOrders(req.query);
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

const vnPayReturn =  async (req, res, next) => {
  let vnp_Params = req.query;

  let secureHash = vnp_Params['vnp_SecureHash'];

  delete vnp_Params['vnp_SecureHash'];
  delete vnp_Params['vnp_SecureHashType'];

  vnp_Params = sortObject(vnp_Params);

  let dotenv = require('dotenv');
  dotenv.config();
  let tmnCode = process.env.VNP_TMNCODE
  let secretKey = process.env.VNP_SECRETKEY

  let querystring = require('qs');
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let crypto = require("crypto");
  let hmac = crypto.createHmac("sha512", secretKey);
  let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

  if(secureHash === signed){
    //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
    // Giải mã chuỗi đã được mã hóa
    // Tách và lấy ID sản phẩm từ chuỗi đã giải mã
    const decodedOrderInfo = decodeURIComponent(vnp_Params['vnp_OrderInfo']);
    const orderId = decodedOrderInfo.split('GD:')[1];
    await db.Payment.update(
        { status: 2 }, // Giả sử trạng thái thanh toán thành công là 2
        { where: { orderId: orderId } }
    );


    res.render('success', {code: vnp_Params['vnp_ResponseCode']})
  } else{
    res.render('success', {code: '97'})
  }
};

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj){
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}
const orderController = { createOrder, getOrder, getOrders, deleteOrder, getOrdersCustomer,  acceptOrder, updateStatusOrder, getOrdersByCustomerId, filterOrders , vnPayReturn};

module.exports = orderController;
