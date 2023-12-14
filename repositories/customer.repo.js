const db = require("../models");

const createCustomer = async ({ userId }) => {
  return await db.Customer.create({ userId });
};

const getCustomers = async () => {
  return await db.Customer.findAll({
    attributes: {
      exclude: ["userId"]
    },
    include: [
      {
        model: db.User,
        as: "customerData",
        attributes: ["id", "userId", "name", "email", "picture"]
      },
    ],
  });
};

const getCustomer = async (filter) => {
  return await db.Customer.findOne({
    where: filter,
    attributes: {
      exclude: ["userId"]
    },
    include: [
      {
        model: db.User,
        as: "customerData",
        attributes: ["id", "userId", "name", "email", "picture"]
      },
    ],
  });
};

const deleteCustomer = async (filter) => {
  return await db.Customer.destroy({
    where: filter,
  });
};

const updateCustomer = async (filter, data) => {
  return await db.Customer.update(
    {
      userId: data?.userId,
    },
    {
      where: filter,
    }
  );
};

const customerRepo = {
  createCustomer,
  getCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
};

module.exports = customerRepo;
