const db = require("../models");

const createCartItem = async ({ cartId, productSizeColorId, amount }) => {
  return await db.CartItem.create({ cartId, productSizeColorId, amount });
};

const getCartItems = async (filter) => {
  return await db.CartItem.findAll({
    where: filter,
  });
};

const getCartItem = async (filter) => {
  return db.CartItem.findOne({
    where: filter,
  });
};

const deleteCartItem = async (filter) => {
  return db.CartItem.destroy({
    where: filter,
  });
};

const updateCartItem = async (filter, data) => {
  return db.CartItem.update(
    {
      productSizeColorId: data?.productSizeColorId,
    },
    {
      where: filter,
    }
  );
};
const cartItemRepo = {
  createCartItem,
  getCartItem,
  getCartItems,
  updateCartItem,
  deleteCartItem,
};

module.exports = cartItemRepo;
