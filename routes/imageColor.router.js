const express = require("express");
const imageColorController = require("../controller/imageColor.controller");
const imageColorRouter = express.Router();

module.exports = imageColorRouter;

imageColorRouter.get("/:id", imageColorController.getImageColor);
imageColorRouter.post("/", imageColorController.createImageColor);
imageColorRouter.get("/", imageColorController.getImageColors);
imageColorRouter.put("/:id", imageColorController.updateImageColor);
imageColorRouter.delete("/:id", imageColorController.deleteImageColor);
