const dotenv = require("dotenv");
const userRepo = require("../repositories/user.repo");
const STATUS_CODE = require("../constants/httpResponseCode");
const accessToken = require("../utils/createToken");
const verifyIdToken = require("../utils/verifyTokenGoogle");
dotenv.config();
const axios = require("axios");
const customerRepo = require("../repositories/customer.repo");
const cartRepo = require("../repositories/cart.repo");

const getUserInfo = async (accessToken) => {
  const endpoint = "https://www.googleapis.com/oauth2/v3/userinfo";

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data; // Thông tin người dùng từ Google UserInfo API
  } catch (error) {
    console.error("Lỗi lấy thông tin người dùng:", error);
    return {
      error: true,
      code: STATUS_CODE.notFounded,
      message: error.message,
    };
  }
};
const login = async (data) => {
  try {
    const { token } = data;

    const googleUser = await getUserInfo(token);
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
        const findUser = await userRepo.getUserByCondition({
          userId: newUser.userId,
        });
        const createCustomer = await customerRepo.createCustomer({
          userId: findUser.dataValues.id,
        });
        console.log(createCustomer);
        const findCustomer = await customerRepo.getCustomer({
          userId: createCustomer.userId,
        });
        const createCart = await cartRepo.createCart({
          customerId: findCustomer.dataValues.id,
        });
        const findCart = await cartRepo.getCart({
          customerId: createCart.customerId,
        });
        return {
          error: false,
          code: STATUS_CODE.created,
          data: newUser,
          message: "Dang nhap thanh cong",
          token: token,
          cart: findCart.dataValues,
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
