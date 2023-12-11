const cartRepo = require("../repositories/cart.repo");
const cartItemRepo = require("../repositories/cartItem.repo");
const productSizeColorRepo = require("../repositories/productSizeColor.repo");
const {
  handleServerError,
  handleBadRequest,
  handleNotFound,
  handleCreate,
  handleSuccess,
} = require("../utils/handleReturn");

const createCartItem = async (data, dataUser) => {
  // console.log(data);
  try {
    const { productSizeColorId, amount } = data;
    console.log(typeof amount)
    if (!productSizeColorId || !amount) {
      return handleBadRequest(
        "Khong duoc de trong cartId, productSizeColorId hoac amount"
      );
    }
    const findProductSizeColor = await productSizeColorRepo.getProductSizeColor(
      { id: productSizeColorId }
    );
    if (!findProductSizeColor) {
      return handleNotFound("Khong tim thay productSizeColor");
    }
    const findProductInCart = await  cartItemRepo.getCartItem({productSizeColorId, cartId: dataUser?.cartId});
    console.log(findProductInCart);
    if(findProductInCart) {
      // Nếu sản phẩm đã tồn tại trong cartItem, thực hiện cập nhật số lượng
      const amountNew = findProductInCart?.dataValues?.amount + parseInt(amount);
      console.log(amountNew);
      const updatedCartItem = await cartItemRepo.updateCartItem({id: findProductInCart?.dataValues?.id},{
        cartId: dataUser?.cartId,
        productSizeColorId,
        amount: amountNew // Cộng thêm số lượng mới vào số lượng hiện tại
      });

      if (!updatedCartItem) {
        return handleBadRequest("Cập nhật cart item không thành công");
      }

      return handleSuccess("Cập nhật thành công", updatedCartItem);
    }
    const createCartItem = await cartItemRepo.createCartItem({
      cartId: dataUser?.cartId,
      productSizeColorId,
      amount,
    });
    if (!createCartItem) {
      return handleBadRequest("Tao cart item khong thanh cong");
    }
    return handleCreate("Thanh cong", createCartItem);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getCartItems = async () => {
  try {
    const findCartItems = await cartItemRepo.getCartItems();
    if (!findCartItems) {
      return handleNotFound("Khong tim thay cart items");
    }
    return handleSuccess("thanh cong", findCartItems);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getCartItem = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findCartItem = await cartItemRepo.getCartItem({ id });
    if (!findCartItem) {
      return handleNotFound("Khong tim thay cartItem");
    }
    return handleSuccess("Thanh cong", findCartItem);
  } catch (error) {
    return handleServerError(error.message);
  }
};

const deleteCartItem = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findCartItem = await cartItemRepo.getCartItem({ id });
    if (!findCartItem) {
      return handleNotFound("Khong tim thay cartItem");
    }
    const deleteCartItem = await cartItemRepo.deleteCartItem({ id });
    if (!deleteCartItem) {
      return handleBadRequest("Xoa khong thanh cong");
    }
    return handleSuccess("Thanh cong");
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const updateCartItem = async (data) => {
  try {
    const { id, productSizeColorId, amount } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    if (productSizeColorId == "") {
      return handleBadRequest("Khong duoc de trong productSizeColorId");
    }
    const findCartItem = await cartItemRepo.getCartItem({ id });
    if (!findCartItem) {
      return handleNotFound("Khong tim thay cartItem");
    }
    const updateCartItem = await cartItemRepo.updateCartItem(
      { id },
      { productSizeColorId, amount }
    );
    if (!updateCartItem) {
      return handleBadRequest("Cap nhat khong thanh cong");
    }
    const findAfterUpdate = await cartItemRepo.getCartItem(({id}));
    return handleSuccess("Thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error?.message);
  }
};
const cartItemService = {
  createCartItem,
  updateCartItem,
  deleteCartItem,
  getCartItem,
  getCartItems,
};

module.exports = cartItemService;
