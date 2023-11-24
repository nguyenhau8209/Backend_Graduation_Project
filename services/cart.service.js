const cartRepo = require("../repositories/cart.repo");
const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const getCart = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findCart = await cartRepo.getCart({ id });
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
