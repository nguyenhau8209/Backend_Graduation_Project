const db = require("../models");

const createCart = async ({ customerId }) => {
  return await db.Cart.create({ customerId });
};

const getCart = async (filter) => {
  return await db.Cart.findOne({ where: filter });
};
const cartRepo = { createCart, getCart };

module.exports = cartRepo;
