const db = require("../models");

const createColor = async ({ name }) => {
  return await db.Color.create({ name });
};

const findColors = async () => {
  return await db.Color.findAll();
};

const findColor = async (filter) => {
  return await db.Color.findOne({ where: filter });
};

const updateColor = async (filter, data) => {
  return await db.Color.update(
    {
      name: data?.name,
    },
    { where: filter }
  );
};

const deleteColor = async (filter) => {
  return await db.Color.destroy({
    where: filter,
  });
};
const colorRepo = {
  createColor,
  findColor,
  findColors,
  updateColor,
  deleteColor,
};

module.exports = colorRepo;
