const express = require("express");
const productSizeColorRouter = express.Router();

const productSizeColorController = require("../controller/productSizeColor.controller");
module.exports = productSizeColorRouter;

productSizeColorRouter.get(
  "/:id",
  productSizeColorController.getProductSizeColor
);
productSizeColorRouter.post(
  "/",
  productSizeColorController.createProductSizeColor
);
productSizeColorRouter.get(
  "/",
  productSizeColorController.getProductSizeColors
);
productSizeColorRouter.put(
  "/:id",
  productSizeColorController.updateProductSizeColor
);
productSizeColorRouter.delete(
  "/:id",
  productSizeColorController.deleteProductSizeColor
);
