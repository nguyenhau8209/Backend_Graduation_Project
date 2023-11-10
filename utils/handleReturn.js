const STATUS_CODE = require("../constants/httpResponseCode");

const handleBadRequest = (message) => {
  return {
    error: true,
    status: STATUS_CODE.badRequest,
    message,
  };
};

const handleNotFound = (message) => {
  return {
    error: true,
    status: STATUS_CODE.notFounded,
    message,
  };
};

const handleServerError = (message) => {
  return {
    error: true,
    status: STATUS_CODE.errorServer,
    message,
  };
};

const handleSuccess = (message, data) => {
  return {
    error: false,
    status: STATUS_CODE.success,
    data: data,
    message,
  };
};
const handleCreate = (message, data) => {
  return {
    error: false,
    status: STATUS_CODE.created,
    data: data,
    message,
  };
};

const handleReturn = {
  handleBadRequest,
  handleCreate,
  handleNotFound,
  handleServerError,
  handleSuccess,
};

module.exports = handleReturn;
