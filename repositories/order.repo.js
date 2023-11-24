const db = require("../models");

const createOrder = async ({ customerId }) => {
  return await db.Order.create({ customerId });
};

const getOrder = async (filter) => {
  return await db.Order.findOne({
    where: filter,
  });
};

const getOrders = async () => {
  return await db.Order.findAll();
};

const deleteOrder = async (filter) => {
  return await db.Order.destroy({
    where: filter,
  });
};

const orderRepo = { createOrder, getOrder, getOrders, deleteOrder };

module.exports = orderRepo;
