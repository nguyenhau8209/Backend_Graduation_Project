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

const findOneCategory = async (filter = {}) => {
  return await Categories.findOne({ where: filter });
};

const updateCategory = async (filter, data) => {
  console.log(filter, data);
  return await Categories.update(
    {
      name: data?.name,
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
  findOneCategory,
  updateCategory,
  deleteCategory,
};

module.exports = categoryRepo;
