const db = require("../models");

const createImageColor = async ({ colorId, productId, imageUrl }) => {
  return await db.ImageColor.create({ colorId, productId, imageUrl });
};

const getImageColors = async () => {
  return await db.ImageColor.findAll({
    attributes: {
      exclude: ["colorId", "productId"],
    },
    include: [
      { model: db.Product, as: "productData", attributes: ["id", "name"] },
      { model: db.Color, as: "colorData", attributes: ["id", "name"] },
    ],
  });
};

const getImageColor = async (filter) => {
  console.log(filter);
  return await db.ImageColor.findOne({
    where: filter,
    attributes: {
      exclude: ["colorId", "productId"],
    },
    include: [
      { model: db.Product, as: "productData", attributes: ["id", "name"] },
      { model: db.Color, as: "colorData", attributes: ["id", "name"] },
    ],
  });
};

const deleteImageColor = async (filter) => {
  return await db.ImageColor.destroy({ where: filter });
};

const updateImageColor = async (filter, data) => {
  console.log(filter, data);
  return await db.ImageColor.update(
    {
      colorId: data?.data?.colorId,
      productId: data?.data?.productId,
      imageUrl: data?.imageUrl,
    },
    {
      where: filter,
    }
  );
};
const imageColorRepo = {
  createImageColor,
  getImageColor,
  getImageColors,
  updateImageColor,
  deleteImageColor,
};

module.exports = imageColorRepo;
