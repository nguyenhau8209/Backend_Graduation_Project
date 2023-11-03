const STATUS_CODE = require("../constants/httpResponseCode");
const userService = require("../services/user.service");

const login = async (req, res) => {
  try {
    const data = await userService.login(req.body);
    if (data?.error) {
      res.status(data.code).json(data.message);
    }
    return res
      .status(STATUS_CODE.created)
      .json({ data: data?.data, message: data?.message, token: data?.token });
  } catch (error) {
    return res.status(error?.status || 500).json(error?.message);
  }
};

const userController = {
  login,
};
module.exports = userController;
