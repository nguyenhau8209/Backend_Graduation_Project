const STATUS_CODE = require("../constants/httpResponseCode");
const informationService = require("../services/information.service");

const createInformation = async (req, res) => {
  try {
    const data = await informationService.createInformation(
      req.body,
      req.loginUser
    );
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const getInformations = async (req, res) => {
  try {
    const data = await informationService.getInformations();
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const getInformation = async (req, res) => {
  try {
    const data = await informationService.getInformation(req.params);
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const deleteInformation = async (req, res) => {
  try {
    const data = await informationService.deleteInformation(req.params);
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};

const updateInformation = async (req, res) => {
  try {
    const data = await informationService.updateInformation(
      req.params,
      req.body
    );
    if (data?.error) {
      return res.status(data?.status).json({ message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ message: error?.message });
  }
};
const informationController = {
  createInformation,
  getInformation,
  getInformations,
  updateInformation,
  deleteInformation,
};
module.exports = informationController;
