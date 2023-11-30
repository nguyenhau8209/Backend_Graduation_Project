const db = require("../models");

const createPayment = async ({
  orderId,
  paymentType,
  status,
  total,
  detailedStatus,
  transaction,
  discountCode,
}) => {
  return await db.Payment.create({
    orderId,
    paymentType,
    status,
    total,
    detailedStatus,
    transaction,
    discountCode,
  });
};

const paymentRepo = { createPayment };
module.exports = paymentRepo;
