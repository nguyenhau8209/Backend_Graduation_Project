const db = require("../models");

const createDiscountCode = async ({
  code,
  discountType,
  discountAmount,
  expiryDate,
  active,
}) => {
  return await db.DiscountCode.create({
    code,
    discountType,
    discountAmount,
    expiryDate,
    active,
  });
};

const getDiscountCodes = async () => {
  return await db.DiscountCode.findAll();
};

const getDiscountCode = async (filter) => {
  return await db.DiscountCode.findOne({
    where: filter,
  });
};

const deleteDiscountCode = async (filter) => {
  return await db.DiscountCode.destroy({
    where: filter,
  });
};

const updateDiscountCode = async (filter, data) => {
  return await db.DiscountCode.update(
    {
      ...data,
    },
    {
      where: filter,
    }
  );
};
const discountCodeRepo = {
  createDiscountCode,
  updateDiscountCode,
  deleteDiscountCode,
  getDiscountCode,
  getDiscountCodes,
};
module.exports = discountCodeRepo;
