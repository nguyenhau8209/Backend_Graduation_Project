const db = require("../models");
const { Users } = require("../models");

const createUser = async ({ userId, name, email, picture, dob }) => {
  return await db.User.create({ userId, name, email, picture, dob });
};

const updateUser = async (filter, data) => {
  console.log(data);
  return await db.User.update(
    {
      ...data
    },
    {
      where: filter,
    }
  );
};

const getUserByCondition = async (filter = {}) => {
  const findUser = await db.User.findOne({
    where: filter,
  });
  return findUser;
};
const userRepo = {
  createUser,
  updateUser,
  getUserByCondition,
};

module.exports = userRepo;
