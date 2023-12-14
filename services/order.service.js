const customerRepo = require("../repositories/customer.repo");
const orderRepo = require("../repositories/order.repo");
const paymentRepo = require("../repositories/payment.repo");
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
    console.log(data);
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
    console.log(data);
    const findOrders = await orderRepo.getOrders({
      customerId: data?.customerId,
    });
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

    const idPayment = getDataOrder.paymentData.dataValues.id;
    const paymentType = getDataOrder.paymentData.dataValues.paymentType;
    const paymentStatus = getDataOrder.paymentData.dataValues.status;

    if (paymentType == 1) {
      if (data == 4) {
        await orderRepo.updateStatusPayment({ id }, { data: 2 });
      }
    }
    getStatusUpdateStatusPayment({ id }, { data }, paymentType);

    return handleSuccess("Cap nhat thanh cong", updateStatusOrder);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getStatusUpdateStatusPayment = async (id, status, paymentType) => {
  // Logic để lấy thông báo dựa trên trạng thái mới (status)
  let array = [0, 1, 2, 3, 4];

  switch (array.at(status.data)) {
    case 0:
      if (paymentType == 1) {
        return await orderRepo.updateStatusPayment(id, 0);
      } else if (paymentType == 2) {
        return await orderRepo.updateStatusPayment(id, -1);
      }
    case 1:
      if (paymentType == 1) {
        return await orderRepo.updateStatusPayment(id, 1);
      } else if (paymentType == 2) {
        return await orderRepo.updateStatusPayment(id, 2);
      }
    case 2:
      if (paymentType == 1) {
        return await orderRepo.updateStatusPayment(id, 1);
      } else if (paymentType == 2) {
        return await orderRepo.updateStatusPayment(id, 2);
      }
    case 3:
      if (paymentType == 1) {
        return await orderRepo.updateStatusPayment(id, 1);
      } else if (paymentType == 2) {
        return await orderRepo.updateStatusPayment(id, 2);
      }
    case 4:
      if (paymentType == 1) {
        return await orderRepo.updateStatusPayment(id, 2);
      } else if (paymentType == 2) {
        return await orderRepo.updateStatusPayment(id, 2);
      }
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
  getOrdersByCustomer,
};

module.exports = orderService;
