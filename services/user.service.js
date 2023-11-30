const dotenv = require("dotenv");
const userRepo = require("../repositories/user.repo");
const STATUS_CODE = require("../constants/httpResponseCode");
const accessToken = require("../utils/createToken");
const verifyIdToken = require("../utils/verifyTokenGoogle");
dotenv.config();
const axios = require("axios");
const customerRepo = require("../repositories/customer.repo");
const cartRepo = require("../repositories/cart.repo");
const HelperApp = require("../utils/helper");

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
    const { access_token } = data;
    const googleUser = await getUserInfo(access_token);
    let newUser = await userRepo.getUserByCondition({ userId: googleUser.sub });

    if (!newUser) {
      newUser = await createUserFromGoogleUser(googleUser);
      if (!newUser) {
        return {
          error: true,
          code: STATUS_CODE.errorServer,
          message: "User creation failed.",
        };
      }
    }

    // Check if customer exists
    let customer = await customerRepo.getCustomer({ userId: newUser.id });
    if (!customer) {
      customer = await customerRepo.createCustomer({ userId: newUser.id });
      if (!customer) {
        return {
          error: true,
          code: STATUS_CODE.errorServer,
          message: "Customer creation failed.",
        };
      }
    }

    // Check if cart exists
    let cart = await cartRepo.getCart({ customerId: customer.id });
    if (!cart) {
      cart = await cartRepo.createCart({ customerId: customer.id });
      if (!cart) {
        return {
          error: true,
          code: STATUS_CODE.errorServer,
          message: "Cart creation failed.",
        };
      }
    }

    const updatedUser = await updateGoogleUser(newUser, googleUser);
    const token = await HelperApp.generateJwtToken(
      {
        userId: googleUser.sub,
        customerId: customer.id,
        cartId: cart.id,
      },
      30 * 60
    );

    return {
      error: false,
      code: STATUS_CODE.success,
      data: updatedUser,
      message: "Login successful",
      token: token,
    };
  } catch (error) {
    return {
      error: true,
      code: STATUS_CODE.errorServer,
      message: error.message,
    };
  }
};

const createUserFromGoogleUser = async (googleUser) => {
  try {
    const newUser = await userRepo.createUser({
      userId: googleUser.sub,
      name: googleUser.name,
      email: googleUser.email,
      picture: googleUser.picture,
    });
    return newUser;
  } catch (error) {
    throw new Error("User creation failed.");
  }
};

const updateGoogleUser = async (user, googleUser) => {
  try {
    await userRepo.updateUser(
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
    return findUserUpdated;
  } catch (error) {
    throw new Error("User update failed.");
  }
};

const userService = {
  login,
};

module.exports = userService;

