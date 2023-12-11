const express = require("express");
const productRouter = express.Router();

const productController = require("../controller/product.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = productRouter;
productRouter.get("/filter", productController.filterProduct);
productRouter.get("/sale", productController.getProductSale);
productRouter.put("/sale/:id", productController.saleProduct);
productRouter.post("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, productController.createProduct);
productRouter.get("/", productController.findProducts);
productRouter.get("/:id", productController.findOneProduct);
productRouter.put("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, productController.updateProduct);
productRouter.delete("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, productController.deleteProduct);
