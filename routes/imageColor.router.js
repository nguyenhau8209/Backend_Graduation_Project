const express = require("express");
const imageColorController = require("../controller/imageColor.controller");
const middlewareAuth = require("../middleware/checkAuth");
const imageColorRouter = express.Router();

module.exports = imageColorRouter;

imageColorRouter.get("/:id", imageColorController.getImageColor);
imageColorRouter.post("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, imageColorController.createImageColor);
imageColorRouter.get("/", imageColorController.getImageColors);
imageColorRouter.put("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, imageColorController.updateImageColor);
imageColorRouter.delete("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, imageColorController.deleteImageColor);
