const express = require("express");
const colorRouter = express.Router();

const colorController = require("../controller/color.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = colorRouter;

colorRouter.get("/:id", colorController.findColor);
colorRouter.post("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, colorController.createColor);
colorRouter.get("/", colorController.findColors);
colorRouter.put("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, colorController.updateColor);
colorRouter.delete("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, colorController.deleteColor);
