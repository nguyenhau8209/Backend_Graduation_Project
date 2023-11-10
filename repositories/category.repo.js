const db = require("../models");

const createCategory = async ({ name, image }) => {
  return await db.Category.create({ name, image });
};

const findCategories = async () => {
  return await db.Category.findAll();
};

const findOneCategory = async (filter = {}) => {
  return await db.Category.findOne({ where: filter });
};

const updateCategory = async (filter, data) => {
  console.log(filter, data);
  return await db.Category.update(
    {
      name: data?.name,
      image: data?.image,
      delete_flag: data?.delete_flag,
    },
    { where: filter }
  );
};

const deleteCategory = async (filter) => {
  return await db.Category.destroy({ where: filter });
};

const restoreCategory = async (filter) => {
  return await db.Category.restore({
    where: filter,
  });
};
const categoryRepo = {
  createCategory,
  findCategories,
  findOneCategory,
  updateCategory,
  deleteCategory,
  restoreCategory,
};

module.exports = categoryRepo;
