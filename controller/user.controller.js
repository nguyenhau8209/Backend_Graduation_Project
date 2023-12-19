const STATUS_CODE = require("../constants/httpResponseCode");
const userService = require("../services/user.service");
const productService = require("../services/product.service");

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

const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const data = await userService.updateUser(id, req.files, req.body);
    if (data?.error) {
      return res
          .status(data?.status)
          .json({status: data?.status, message: data?.message});
    }
    return res
        .status(data?.status)
        .json({status: data?.status, data: data?.data, message: data?.message});
  } catch (error) {
    return res
        .status(STATUS_CODE.errorServer)
        .json({status: STATUS_CODE.errorServer, message: error.message});
  }
};

const filterUser = async (req, res) => {
  try {
    const data = await userService.filterUsers(req.query);
    if (data?.error) {
      return res
          .status(data?.status)
          .json({status: data?.status, message: data?.message});
    }
    return res
        .status(data?.status)
        .json({status: data?.status, data: data?.data, message: data?.message});
  } catch (error) {
    return res
        .status(STATUS_CODE.errorServer)
        .json({status: STATUS_CODE.errorServer, message: error.message});
  }
};
const userController = {
  login,
  updateUser,
  filterUser,
};
module.exports = userController;
