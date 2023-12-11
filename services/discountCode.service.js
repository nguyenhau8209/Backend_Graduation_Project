const moment = require("moment-timezone");
const discountCodeRepo = require("../repositories/discountCode.repo");
const {
  handleServerError,
  handleBadRequest,
  handleCreate,
  handleNotFound,
  handleSuccess,
} = require("../utils/handleReturn");

const createDiscountCode = async (data) => {
  try {
    const { code, discountType, discountAmount, expiryDate, active } = data;
    if (!code || !discountType || !discountAmount || !expiryDate || !active) {
      return handleBadRequest("Khong duoc de trong cac truong");
    }
    // Kiểm tra xem expiryDate có lớn hơn ngày hôm nay không
    const today = moment().tz("Asia/Ho_Chi_Minh"); // Lấy ngày và giờ hiện tại theo múi giờ Việt Nam
    const expirationDate = moment(expiryDate).tz("Asia/Ho_Chi_Minh"); // Chuyển đổi expirationDate sang múi giờ Việt Nam
    console.log(expirationDate);
    if (expirationDate <= today) {
      return handleBadRequest("Ngày hết hạn phải lớn hơn ngày hôm nay");
    }
    const findCode = await discountCodeRepo.getDiscountCode({ code });
    if (findCode) {
      return handleBadRequest("Ma giam gia da ton tai");
    }

    const createDiscountCode = await discountCodeRepo.createDiscountCode({
      code,
      discountType,
      discountAmount,
      expiryDate: expirationDate.toDate(),
      active,
    });
    if (!createDiscountCode) {
      return handleBadRequest("Tao ma giam gia khong thanh cong");
    }
    return handleCreate("Thanh cong", createDiscountCode);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getDiscountCodes = async () => {
  try {
    const findDiscountCode = await discountCodeRepo.getDiscountCodes();
    if (!findDiscountCode) {
      return handleNotFound("Khong tim thay ma giam gia");
    }
    // Kiểm tra và cập nhật trạng thái của các mã giảm giá
    findDiscountCode.forEach(async (coupon) => {
      if (coupon.expirationDate < new Date() && coupon.active === true) {
        await discountCodeRepo.updateDiscountCode(
          { id: coupon.id },
          { active: false }
        );
      }
    });
    const findAfterUpdate = await discountCodeRepo.getDiscountCodes();
    return handleSuccess("thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const getDiscountCode = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findDiscountCode = await discountCodeRepo.getDiscountCode({ id });
    if (!findDiscountCode) {
      return handleNotFound("Khong tim thay ma giam gia");
    }
    console.log(findDiscountCode);
    if (
      findDiscountCode.dataValues.expiryDate < new Date() &&
      findDiscountCode.dataValues.active === true
    ) {
      await discountCodeRepo.updateDiscountCode(
        { id: findDiscountCode.dataValues.id },
        { active: false }
      );
      return handleBadRequest("Ma giam gia da het han");
    }
    const findAfterUpdate = await discountCodeRepo.getDiscountCode({ id });
    return handleSuccess("Thanh cong", findAfterUpdate);
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const deleteDiscountCode = async (data) => {
  try {
    const { id } = data;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findDiscountCode = await discountCodeRepo.getDiscountCode({ id });
    if (!findDiscountCode) {
      return handleNotFound("Khong tim thay ma giam gia");
    }
    const deleteDiscountCode = await discountCodeRepo.deleteDiscountCode({
      id,
    });
    if (!deleteDiscountCode) {
      return handleBadRequest("Xoa that bai");
    }
    return handleSuccess("Thanh cong");
  } catch (error) {
    return handleServerError(error?.message);
  }
};

const updateDiscountCode = async (idInfo, data) => {
  console.log(data.expiryDate);
  try {
    const { id } = idInfo;
    if (!id) {
      return handleBadRequest("Khong duoc de trong id");
    }
    const findDiscountCode = await discountCodeRepo.getDiscountCode({ id });
    if (!findDiscountCode) {
      return handleNotFound("Khong tim thay ma giam gia");
    }
    if (data?.expiryDate) {
      console.log("vaooo");
      const today = new Date();
      const expirationDate = new Date(data?.expiryDate);

      if (expirationDate <= today) {
        return handleBadRequest("Han su dung khong duoc nho hon hien tai");
      } else {
        data.active = true;
      }
    }
    console.log("Thoat");
    const updateDiscountCode = await discountCodeRepo.updateDiscountCode(
      { id },
      { ...data }
    );
    if (!updateDiscountCode) {
      return handleBadRequest("Cap nhat that bai");
    }
    return handleSuccess("Thanh cong");
  } catch (error) {
    return handleServerError(error?.message);
  }
};
const discountCodeService = {
  createDiscountCode,
  updateDiscountCode,
  deleteDiscountCode,
  getDiscountCode,
  getDiscountCodes,
};
module.exports = discountCodeService;
