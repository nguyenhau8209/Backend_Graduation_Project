const imageColorRepo = require("../repositories/imageColor.repo");
const urlUploadImage = require("../utils/cloudinary");
const {
    handleServerError,
    handleBadRequest,
    handleCreate,
    handleNotFound,
    handleSuccess,
} = require("../utils/handleReturn");

const createImageColor = async (data) => {
    try {
        const {colorId, productId, imageUrl} = data;
        if (!colorId || !productId || !imageUrl) {
            return handleBadRequest("Khong duoc de trong");
        }
        const findByColorIdAndProduct = await imageColorRepo.getImageColor({
            colorId,
            productId,
        });
        if (findByColorIdAndProduct) {
            return handleBadRequest("Da ton tai");
        }
        const cloudFile = await urlUploadImage(imageUrl.tempFilePath, imageUrl, "image-color");
        const createImageColor = await imageColorRepo.createImageColor({
            colorId,
            productId,
            imageUrl: cloudFile,
        });
        if (!createImageColor) {
            return handleBadRequest("Khong thanh cong");
        }
        return handleCreate("Thanh cong", createImageColor);
    } catch (error) {
        return handleServerError(error.message);
    }
};

const getImageColors = async () => {
    try {
        const getImageColors = await imageColorRepo.getImageColors();
        if (!getImageColors) {
            return handleNotFound("Khong tim thay");
        }
        return handleSuccess("Thanh cong", getImageColors);
    } catch (error) {
        return handleServerError(error.message);
    }
};

const getImageColor = async (data) => {
    try {
        const {id} = data;

        if (!id) {
            return handleBadRequest("Khong duoc de trong id");
        }
        const getImageColor = await imageColorRepo.getImageColor({id});
        if (!getImageColor) {
            return handleNotFound("Khong tim thay");
        }
        return handleSuccess("Thanh cong", getImageColor);
    } catch (error) {
        return handleServerError(error.message);
    }
};

const updateImageColor = async (id, data, imageUrl) => {
    console.log(imageUrl);
    if (!id) {
        return handleBadRequest("Khong duoc de trong");
    }
    try {
        const getImageColor = await imageColorRepo.getImageColor({id});
        if (!getImageColor) {
            return handleNotFound("Khong tim thay category");
        }
        if (imageUrl) {
            console.log(imageUrl);
            const cloudFile = await urlUploadImage(
                imageUrl.imageUrl.tempFilePath,
                imageUrl.imageUrl, "image-color"
            );
            const updateImageColor = await imageColorRepo.updateImageColor(
                {id},
                {data, imageUrl: cloudFile}
            );
            if (!updateImageColor) {
                return handleBadRequest("Cap nhat that bai");
            }
            const findAfterUpdate = await imageColorRepo.getImageColor({id});
            return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
        }
        const updateImageColor = await imageColorRepo.updateImageColor(
            {id},
            {data}
        );
        if (!updateImageColor) {
            return handleBadRequest("Cap nhat that bai");
        }
        const findAfterUpdate = await imageColorRepo.getImageColor({id});
        return handleSuccess("Cap nhat thanh cong", findAfterUpdate);
    } catch (error) {
        return handleServerError(error.message);
    }
};

const deleteImageColor = async (data) => {
    try {
        const {id} = data;
        if (!id) {
            return handleBadRequest("Khong duoc de trong id");
        }
        const getImageColor = await imageColorRepo.getImageColor({id});
        if (!getImageColor) {
            return handleNotFound("Khong tim thay");
        }
        const deleteImageColor = await imageColorRepo.deleteImageColor({id});
        if (!deleteImageColor) {
            return handleBadRequest("Xoa that bai");
        }
        return handleSuccess("Thanh cong");
    } catch (error) {
        return handleServerError(error.message);
    }
};
const imageColorService = {
    createImageColor,
    getImageColor,
    getImageColors,
    updateImageColor,
    deleteImageColor,
};

module.exports = imageColorService;
