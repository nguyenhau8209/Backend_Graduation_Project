const STATUS_CODE = require("../constants/httpResponseCode");
const commentService = require("../services/comment.service");

const createComment = async (req, res) => {
  try {
    const data = await commentService.createComment(req.body, req.loginUser, req.files);

    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, data: data?.data, message: data?.message });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};

const getComment = async (req, res) => {
  try {
    const data = await commentService.getComment();

    if (data?.error) {
      return res
        .status(data?.status)
        .json({ status: data?.status, message: data?.message });
    }
    return res
      .status(data?.status)
      .json({ status: data?.status, message: data?.message, data: data?.data });
  } catch (error) {
    return res
      .status(STATUS_CODE.errorServer)
      .json({ status: STATUS_CODE.errorServer, message: error?.message });
  }
};

const commentController = {
  createComment,
  getComment,
};

module.exports = commentController;
