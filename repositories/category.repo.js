const { Categories } = require("../models");

const createCategory = async ({ name, image }) => {
  return await Categories.create({ name, image });
};

const findCategories = async () => {
  return await Categories.findAll({
    where: {
      delete_flag: false,
    },
  });
};

const findOneCategories = async (filter = {}) => {
  return await Categories.findOne({ where: filter });
};

const updateCategory = async (filter, data) => {
  return await Categories.update(
    {
      image: data?.image,
      delete_flag: data?.delete_flag,
    },
    { where: filter }
  );
};

const deleteCategory = async (filter) => {
  return await Categories.update(
    {
      delete_flag: true,
    },
    { where: filter }
  );
};

const categoryRepo = {
  createCategory,
  findCategories,
  findOneCategories,
  updateCategory,
  deleteCategory,
};

module.exports = categoryRepo;
