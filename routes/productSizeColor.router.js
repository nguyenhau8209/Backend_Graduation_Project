const express = require("express");
const productSizeColorRouter = express.Router();

const productSizeColorController = require("../controller/productSizeColor.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = productSizeColorRouter;

productSizeColorRouter.get(
    "/:id",
    productSizeColorController.getProductSizeColor
);
productSizeColorRouter.post(
    "/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
        req.permission = [1];
        next()
    }, middlewareAuth.checkPermission,
    productSizeColorController.createProductSizeColor
);
productSizeColorRouter.get(
    "/",
    productSizeColorController.getProductSizeColors
);
productSizeColorRouter.put(
    "/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
        req.permission = [1];
        next()
    }, middlewareAuth.checkPermission,
    productSizeColorController.updateProductSizeColor
);
productSizeColorRouter.delete(
    "/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
        req.permission = [1];
        next()
    }, middlewareAuth.checkPermission,
    productSizeColorController.deleteProductSizeColor
);
