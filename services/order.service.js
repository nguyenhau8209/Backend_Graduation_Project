const customerRepo = require("../repositories/customer.repo");
const orderRepo = require("../repositories/order.repo");
const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleCreate,
  handleSuccess,
} = require("../utils/handleReturn");

var admin = require("firebase-admin");

var serviceAccount = require("../config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://md14datn-1ef2d-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const messaging = admin.messaging();

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

const getOrders = async (data) => {
  try {
    console.log(data)
    const findOrders = await orderRepo.getOrders();
    if (!findOrders) {
      return handleNotFound("Khong tim thay orders");
    }
    return handleSuccess("Thanh cong", findOrders);
  } catch (error) {
    return handleServerError(error?.message);
  }
};
const getOrdersByCustomer = async (data) => {
  try {
    console.log(data)
    const findOrders = await orderRepo.getOrders({customerId: data?.customerId});
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

const updateStatusOrder = async (id, data) => {
  if (!id) {
    return handleBadRequest("Khong duoc de trong");
  }
  try {
    const getDataOrder = await orderRepo.getOrder({ id });

    if (!getDataOrder) {
      return handleNotFound("Khong tim thay order");
    }

    const updateStatusOrder = await orderRepo.updateStatusOrder(
      { id },
      { data }
    );

    // Gửi thông báo push tới client
    const userId = getDataOrder.customerId; // Thay thế bằng logic xác định userId của người đặt hàng
    const statusMessage = getStatusMessage({ data }); // Hàm để lấy thông báo dựa trên trạng thái mới
    console.log(statusMessage);
    sendPushNotificationToClient(userId, statusMessage);

    return handleSuccess("Cap nhat thanh cong", updateStatusOrder);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const sendPushNotificationToClient = (userId, message) => {
  const payload = {
    notification: {
      title: "Thông báo đơn hàng",
      body: message,
    },
    token: "", // Thay thế bằng logic để lấy device token từ database
  };

  messaging
    .send(payload)
    .then((response) => {
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
};

const getStatusMessage = (status) => {
  // Logic để lấy thông báo dựa trên trạng thái mới (status)
  let array = [0, 1, 2, 3, 4];
  switch (array.findIndex(status - 1)) {
    case 0:
      return "Đơn hàng đã bị hủy.";
    case 1:
      return "Đơn hàng đang chờ xác nhận.";
    case 2:
      return "Đơn hàng đã được xác nhận.";
    case 3:
      return "Đơn hàng đang được giao hàng.";
    case 4:
      return "Đơn hàng đã được giao hàng thành công.";
    default:
      return "Trạng thái đơn hàng đã thay đổi.";
  }
};

const orderService = {
  createOrder,
  getOrder,
  getOrders,
  deleteOrder,
  updateStatusOrder,
  getOrdersByCustomer
};

module.exports = orderService;
