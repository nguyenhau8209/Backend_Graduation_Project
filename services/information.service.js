const informationRepo = require("../repositories/information.repo");
const {
  handleServerError,
  handleBadRequest,
  handleCreate,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const createInformation = async (data, dataUser) => {
  try {
    const { name, phone, city, district, commune, street } = data;
    console.log(dataUser);
    if (!name || !phone || !city || !district || !commune || !street) {
      return handleBadRequest("Vui long nhap du thong tin");
    }
    const createInformation = await informationRepo.createInformation({
      name,
      phone,
      customerId: dataUser.customerId,
      city,
      district,
      commune,
      street,
    });
    if (!createInformation) {
      return handleBadRequest("Tao thong tin that bai");
    }
    return handleCreate("Thanh cong", createInformation);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getInformations = async (data) => {
  console.log(data)
  try {
    const findInformation = await informationRepo.getInformations({customerId: data?.customerId});
    if (!findInformation) {
      return handleNotFound("Khong tim thay dia chi");
    }
    return handleSuccess("Thanh cong", findInformation);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getInformation = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findInformation = await informationRepo.getInformation({ id });
    if (!findInformation) {
      return handleNotFound("Khong tim thay information");
    }
    return handleSuccess("Thanh cong", findInformation);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const deleteInformation = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findInformation = await informationRepo.getInformation({ id });
    if (!findInformation) {
      return handleNotFound("Khong tim thay information");
    }
    const deleteInformation = await informationRepo.deleteInformation({ id });
    if (!deleteInformation) {
      return handleBadRequest("Xoa information that bai");
    }
    return handleSuccess("Thanh cong");
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const updateInformation = async (idInfo, data) => {
  try {
    const { id } = idInfo;
    console.log(id);
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findInformation = await informationRepo.getInformation({ id });
    if (!findInformation) {
      return handleNotFound("Khong tim thay information");
    }
    const updateInformation = await informationRepo.updateInformation(
      { id },
      { ...data }
    );
    if (!updateInformation) {
      return handleBadRequest("Cap nhat that bai");
    }
    return handleSuccess("Thanh cong");
  } catch (error) {
    return handleServerError(error?.message);
  }
};
const informationService = {
  createInformation,
  getInformation,
  getInformations,
  updateInformation,
  deleteInformation,
};
module.exports = informationService;
