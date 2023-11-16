const db = require("../models");

const createSize = async ({ name }) => {
  return await db.Size.create({ name });
};

const findSizes = async () => {
  return await db.Size.findAll();
};

const findSize = async (filter) => {
  return await db.Size.findOne({ where: filter });
};

const updateSize = async (filter, data) => {
  return await db.Size.update(
    {
      name: data?.name,
    },
    { where: filter }
  );
};

const deleteSize = async (filter) => {
  return await db.Size.destroy({
    where: filter,
  });
};
const sizeRepo = {
  createSize,
  findSize,
  findSizes,
  updateSize,
  deleteSize,
};

module.exports = sizeRepo;
