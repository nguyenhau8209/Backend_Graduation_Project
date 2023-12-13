const db = require("../models");

const createCart = async ({ customerId }) => {
  return await db.Cart.create({ customerId });
};

const getCart = async (filter) => {
  return await db.Cart.findOne({
    where: filter,
    include: [
      {
        model: db.CartItem,
        as: "cartItemData",
        attributes: ["id", "amount"],
        include: [
          {
            model: db.ProductSizeColor,
            as: "cartProductSizeColorData",
            attributes: ["id", "price"],
            include: [
              {
                model: db.Product,
                as: "productData",
                // attributes: ["id", "name", "mainImage"],
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
const cartRepo = { createCart, getCart };

module.exports = cartRepo;
