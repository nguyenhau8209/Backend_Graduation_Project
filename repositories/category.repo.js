const { Categories } = require("../models");

const createCategory = async ({ name, image }) => {
  return await Categories.create({ name, image });
};

const findCategories = async () => {
  return await Categories.findAll();
};

const findOneCategories = async ({ filter = {} }) => {
  return await Categories.findOne({ where: filter });
};

const updateCategory = async ({ filter, data }) => {
  return await Categories.update(
    {
      name: data.name,
    },
    { where: filter }
  );
};

const deleteCategory = async ({ filter }) => {
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
