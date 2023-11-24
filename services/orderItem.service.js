const db = require("../models");
const cartItemRepo = require("../repositories/cartItem.repo");
const orderRepo = require("../repositories/order.repo");
const orderItemRepo = require("../repositories/orderItem.repo");
const {
  handleServerError,
  handleSuccess,
  handleBadRequest,
} = require("../utils/handleReturn");

const createOrderItem = async (data) => {
  try {
    const { cartItemIds } = data;
    // Lấy thông tin chi tiết của các cartItemIds từ cơ sở dữ liệu
    const cartItems = await cartItemRepo.getCartItems({ id: cartItemIds });

    if (cartItems.length > 0) {
      // Tạo đơn hàng từ các cartItems
      const order = await orderRepo.createOrder({ customerId: 2 });

      // Tạo các mục đơn hàng từ thông tin của cartItems
      for (const cartItem of cartItems) {
        // Tìm thông tin của productSizeColor từ cartItem
        const productSizeColor = await db.ProductSizeColor.findByPk(
          cartItem.productSizeColorId
        );

        if (productSizeColor) {
          // Tạo các mục đơn hàng từ thông tin của cartItems và productSizeColor
          await db.OrderItem.create({
            orderId: order.id,
            productSizeColorId: cartItem.productSizeColorId,
            amount: cartItem.amount,
            price: productSizeColor.price, // Sử dụng giá từ productSizeColor
          });
        } else {
          // Handle case khi không tìm thấy thông tin của productSizeColor
          console.log(
            `ProductSizeColor with ID ${cartItem.productSizeColorId} not found`
          );
        }
      }

      // Xóa các cartItems sau khi tạo đơn hàng thành công
      //   await db.CartItem.destroy({ where: { id: cartItemIds } });

      return handleSuccess("Thanh cong");
    } else {
      return handleBadRequest("That bai");
    }
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const orderItemService = { createOrderItem };
module.exports = orderItemService;
