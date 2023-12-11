const cartRepo = require("../repositories/cart.repo");
const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const getCart = async (data) => {
  console.log(data)
  try {
    const { cartId } = data;
    console.log(cartId)
    if (!cartId) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findCart = await cartRepo.getCart({ id: cartId });
    if (!findCart) {
      return handleNotFound("Khong tim thay cart");
    }
    return handleSuccess("Thanh cong", findCart);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const cartService = { getCart };

module.exports = cartService;
