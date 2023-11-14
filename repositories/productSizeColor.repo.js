const db = require("../models");

const createProductSizeColor = async ({
  productId,
  sizeId,
  colorId,
  amount,
  price,
}) => {
  return await db.ProductSizeColor.create({
    productId,
    sizeId,
    colorId,
    amount,
    price,
  });
};

const getProductSizeColors = async () => {
  return await db.ProductSizeColor.findAll({
    attributes: {
      exclude: ["colorId", "productId", "sizeId"],
    },
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
  });
};

const getProductSizeColor = async (filter) => {
  return await db.ProductSizeColor.findOne({
    where: filter,
    attributes: {
      exclude: ["sizeId"],
    },
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
        // include: [
        //   {
        //     model: db.ImageColor,
        //     as: "colorData",
        //     attributes: ["id", "name"],
        //   },
        // ],
      },
      { model: db.Size, as: "sizeData", attributes: ["id", "name"] },
    ],
  });
};

const deleteProductSizeColor = async (filter) => {
  return await db.ProductSizeColor.destroy({ where: filter });
};

const updateProductSizeColor = async (filter, data) => {
  console.log(filter, data);
  return await db.ProductSizeColor.update(
    {
      productId: data?.productId,
      imageColorId: data?.imageColorId,
      sizeId: data?.sizeId,
      amount: data?.amount,
      price: data?.price,
    },
    { where: filter }
  );
};
const productSizeColorRepo = {
  createProductSizeColor,
  getProductSizeColor,
  getProductSizeColors,
  deleteProductSizeColor,
  updateProductSizeColor,
};
module.exports = productSizeColorRepo;
