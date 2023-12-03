const db = require("../models");

const findProducts = async () => {
  return await db.Product.findAll({
    attributes: {
      exclude: ["categoryId"],
    },
    include: [
      { model: db.Category, as: "categoryData", attributes: ["id", "name"] },
      {
        model: db.ProductSizeColor,
        as: "productData",
        attributes: ["id", "amount", "price"],
        include: [
          {
            model: db.Color,
            as: "colorData",
            attributes: ["id", "name"],
          },
          { model: db.Size, as: "sizeData", attributes: ["id", "name"] },
        ],
      },
    ],
  });
};
const findOneProduct = async (filter = {}) => {
  return await db.Product.findOne({
    where: filter,
    attributes: {
      exclude: ["categoryId"],
    },
    include: [
      { model: db.Category, as: "categoryData", attributes: ["id", "name"] },
      {
        model: db.ProductSizeColor,
        as: "productData",
        attributes: ["id", "amount", "price"],
        include: [
          {
            model: db.Color,
            as: "colorData",
            attributes: ["id", "name"],
          },
          { model: db.Size, as: "sizeData", attributes: ["id", "name"] },
        ],
      },
    ],
  });
};

const createProduct = async ({ name, mainImage, categoryId, price, description }) => {
  return await db.Product.create({ name, mainImage, categoryId, price, description });
};

const updateProduct = async (filter, data) => {
  console.log(filter, data);
  return await db.Product.update(
    {
      name: data?.data?.name,
      mainImage: data?.mainImage,
      categoryId: data?.data?.categoryId,
      price: data?.data?.price,
      description: data?.data?.description,
    },
    {
      where: filter,
    }
  );
};

const deleteProduct = async (filter) => {
  return await db.Product.destroy({
    where: filter,
  });
};
const productRepo = {
  findOneProduct,
  createProduct,
  findProducts,
  updateProduct,
  deleteProduct,
};

module.exports = productRepo;
