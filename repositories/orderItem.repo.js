const db = require("../models");

const createOrderItem = async ({
  cartId,
  productSizeColorId,
  amount,
  price,
}) => {
  return await db.OrderItem.create({
    cartId,
    productSizeColorId,
    amount,
    price,
  });
};

const getOrderItems = async () => {
  return await db.OrderItem.findAll();
};

const getOrderItem = async (filter) => {
  return await db.OrderItem.findOne({
    where: filter,
  });
};

const deleteOrderItem = async (filter) => {
  return await db.OrderItem.destroy({
    where: filter,
  });
};
const orderItemRepo = {
  createOrderItem,
  getOrderItem,
  getOrderItems,
  deleteOrderItem,
};

module.exports = orderItemRepo;
