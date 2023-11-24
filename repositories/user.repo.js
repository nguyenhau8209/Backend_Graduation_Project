const db = require("../models");
const { Users } = require("../models");

const createUser = async ({ userId, name, email, picture }) => {
  return await db.User.create({ userId, name, email, picture });
};

const updateUser = async (filter, data) => {
  console.log(data);
  return await db.User.update(
    {
      userId: data.userId,
      name: data.name,
      picture: data.picture,
      email: data.email ? data.email : "example@gmail.com",
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
