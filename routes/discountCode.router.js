const express = require("express");
const discountCodeRouter = express.Router();

const discountCodeController = require("../controller/discountCode.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = discountCodeRouter;

discountCodeRouter.get("/:id", discountCodeController.getDiscountCode);
discountCodeRouter.post("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, discountCodeController.createDiscountCode);
discountCodeRouter.get("/", discountCodeController.getDiscountCodes);
discountCodeRouter.put("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, discountCodeController.updateDiscountCode);
discountCodeRouter.delete("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, discountCodeController.deleteDiscountCode);
