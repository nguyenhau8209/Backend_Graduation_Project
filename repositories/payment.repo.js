const db = require("../models");
const { Op, fn, col } = require("sequelize");
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

const statistics = async (filter = {}) => {
  return await db.Payment.findAlld({
    attributes: [[fn("SUM", col("total")), "totalPrice"]],
    where: {
      ...filter,
      createdAt: {
        [Op.between]: [filter.startDate, filter.endDate],
      },
    },
  });
};

const paymentRepo = { createPayment, statistics };
module.exports = paymentRepo;
