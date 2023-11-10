const db = require("../models");

const findProducts = async () => {
  return await db.Product.findAll({
    attributes: {
      exclude: ["categoryId"],
    },
    include: [
      { model: db.Category, as: "categoryData", attributes: ["id", "name"] },
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
    ],
  });
};

const createProduct = async ({ name, mainImage, categoryId }) => {
  return await db.Product.create({ name, mainImage, categoryId });
};

const updateProduct = async (filter, data) => {
  console.log(filter, data);
  return await db.Product.update(
    {
      name: data?.name,
      mainImage: data?.mainImage,
      categoryId: data?.categoryId,
    },
    {
      where: filter,
    }
  );
};
const productRepo = {
  findOneProduct,
  createProduct,
  findProducts,
  updateProduct,
};

module.exports = productRepo;
