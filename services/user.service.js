const dotenv = require("dotenv");
const userRepo = require("../repositories/user.repo");
const STATUS_CODE = require("../constants/httpResponseCode");
const accessToken = require("../utils/createToken");
const verifyIdToken = require("../utils/verifyTokenGoogle");
dotenv.config();

const login = async (data) => {
  try {
    const { token } = data;

    const googleUser = await verifyIdToken(token);
    try {
      const findUser = await userRepo.getUserByCondition({
        userId: googleUser.sub,
      });
      if (!findUser) {
        const newUser = await userRepo.createUser({
          userId: googleUser.sub,
          name: googleUser.name,
          email: googleUser.email,
          picture: googleUser.picture,
        });
        const token = await accessToken(googleUser.sub);
        return {
          error: false,
          code: STATUS_CODE.created,
          data: newUser,
          message: "Dang nhap thanh cong",
          token: token,
        };
      }
      console.log("vao update");
      const updateUser = await userRepo.updateUser(
        { userId: googleUser.sub },
        {
          userId: googleUser.sub,
          name: googleUser.name,
          email: googleUser.email,
          picture: googleUser.picture,
        }
      );
      const findUserUpdated = await userRepo.getUserByCondition({
        userId: googleUser.sub,
      });
      const token = await accessToken(googleUser.sub);
      return {
        error: false,
        code: STATUS_CODE.success,
        data: findUserUpdated,
        message: "Dang nhap thanh cong",
        token: token,
      };
    } catch (error) {
      return {
        error: true,
        code: STATUS_CODE.errorServer,
        message: error.message,
      };
    }
  } catch (error) {
    return {
      error: true,
      code: STATUS_CODE.errorServer,
      message: error.message,
    };
  }
};

const userService = {
  login,
};

module.exports = userService;
