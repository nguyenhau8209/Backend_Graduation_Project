// cloudinary.js
const dotenv = require("dotenv");
const { handleBadRequest } = require("./handleReturn");
const cloudinary = require("cloudinary").v2;

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadImage = async (file, image, folder) => {
  const fileTypes = ["image/jpeg", "image/png", "image/jpg"];
  const imageSize = 1024;

  if (!fileTypes.includes(image.mimetype))
    return res.send("Image formats supported: JPG, PNG, JPEG");

  if (image.size / 1024 > imageSize)
    return res.send(`Image size should be less than ${imageSize}kb`);
  const imageUpload = await cloudinary.uploader.upload(
    file,
    { folder: folder },
    (result) => result
  );
  return imageUpload;
};

const urlUploadImage = async (tempFilePath, image) => {
  const cloudFile = await uploadImage(tempFilePath, image, "category-image");
  if (!cloudFile) {
    return handleBadRequest("Lỗi upload ảnh");
  }
  return cloudFile.url;
};
module.exports = urlUploadImage;
