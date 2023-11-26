const db = require("../models");

const createOrder = async ({ customerId }) => {
  return await db.Order.create({ customerId });
};

const getOrder = async (filter) => {
  return await db.Order.findOne({
    where: filter,
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
    ],
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
