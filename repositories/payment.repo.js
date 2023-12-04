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
  let queryCondition;
  let dateFormat;

  switch (true) {
    case filter.filter == 1:
      // Ngày
      queryCondition = {
        createdAt: {
          [Op.between]: [
            `${filter.startDate} 01:00:00`,
            `${filter.endDate} 23:59:59.999`,
          ],
        },
      };
      dateFormat = "%Y-%m-%d";
      break;
    case filter.filter == 2:
      // Tháng
      queryCondition = {
        createdAt: {
          [Op.between]: [
            `${filter.startDate}-01 01:00:00`,
            `${filter.endDate}-31 23:59:59.999`,
          ],
        },
      };
      dateFormat = "%Y-%m";
      break;
    case filter.filter == 3:
      // Năm
      queryCondition = {
        createdAt: {
          [Op.between]: [
            `${filter.startDate}-01-01 01:00:00`,
            `${filter.endDate}-12-31 23:59:59.999`,
          ],
        },
      };
      dateFormat = "%Y";
      break;
    default:
      throw new Error("Invalid date format");
  }
  return await db.Payment.findAll({
    attributes: [
      [fn("SUM", col("total")), "totalPrice"],
      [fn("DATE_FORMAT", col("createdAt"), dateFormat), "date"],
    ],
    where: queryCondition,
    group: ["date"],
  });
};

const paymentRepo = { createPayment, statistics };
module.exports = paymentRepo;
