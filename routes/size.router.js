const express = require("express");
const sizeRouter = express.Router();
const middlewareAuth = require("../middleware/checkAuth")
const sizeController = require("../controller/size.controller");
module.exports = sizeRouter;

sizeRouter.get("/:id", sizeController.findSize);
sizeRouter.post("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, sizeController.createSize);//tao 1 quyen cho duong dan nay
sizeRouter.get("/", sizeController.findSizes);
sizeRouter.put("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, sizeController.updateSize);
sizeRouter.delete("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, sizeController.deleteSize);
