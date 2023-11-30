const db = require("../models");

const createOrder = async ({ customerId, addressId }) => {
  return await db.Order.create({ customerId, addressId });
};

const getOrder = async (filter) => {
  return await db.Order.findOne({
    where: filter,
    attributes: {
      exclude: ["addressId"],
    },
    include: [
      {
        model: db.OrderItem,
        as: "orderItemData",
        attributes: ["id", "amount", "price"],
        include: [
          {
            model: db.ProductSizeColor,
            as: "orderProductSizeColorData",
            attributes: ["id", "price"],
            include: [
              {
                model: db.Product,
                as: "productData",
                attributes: ["id", "name", "mainImage"],
                include: [
                  {
                    model: db.Category,
                    as: "categoryData",
                    attributes: ["id", "name"],
                  },
                ],
              },
              {
                model: db.Color,
                as: "colorData",
                attributes: ["id", "name"],
              },
              { model: db.Size, as: "sizeData", attributes: ["id", "name"] },
            ],
          },
        ],
      },
      {
        model: db.Payment,
        as: "paymentData",
        attributes: [
          "id",
          "paymentType",
          "status",
          "total",
          "transaction",
          "discountCode",
          "createdAt",
        ],
      },
      {
        model: db.Information,
        as: "addressData",
      },
    ],
  });
};

const getOrders = async () => {
  return await db.Order.findAll({
    include: [
      {
        model: db.Payment,
        as: "paymentData",
        attributes: [
          "id",
          "paymentType",
          "status",
          "total",
          "transaction",
          "discountCode",
          "createdAt",
        ],
      },
      {
        model: db.Information,
        as: "addressData",
      },
    ],
  });
};

const deleteOrder = async (filter) => {
  return await db.Order.destroy({
    where: filter,
  });
};

const orderRepo = { createOrder, getOrder, getOrders, deleteOrder };

module.exports = orderRepo;
