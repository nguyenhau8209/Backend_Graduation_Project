const db = require("../models");

const createInformation = async ({
  name,
  phone,
  customerId,
  city,
  district,
  commune,
  street,
}) => {
  return await db.Information.create({
    name,
    phone,
    customerId,
    city,
    district,
    commune,
    street,
  });
};

const getInformations = async (filter) => {
  return await db.Information.findAll({
    where: filter
  });
};

const getInformation = async (filter) => {
  return await db.Information.findOne({
    where: filter,
  });
};

const deleteInformation = async (filter) => {
  return await db.Information.destroy({
    where: filter,
  });
};

const updateInformation = async (filter, data) => {
  console.log(data);
  return await db.Information.update(
    {
      ...data,
    },
    {
      where: filter,
    }
  );
};
const informationRepo = {
  createInformation,
  getInformation,
  getInformations,
  updateInformation,
  deleteInformation,
};
module.exports = informationRepo;
