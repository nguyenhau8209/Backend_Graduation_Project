const express = require("express");
const colorRouter = express.Router();

const colorController = require("../controller/color.controller");
module.exports = colorRouter;

colorRouter.get("/:id", colorController.findColor);
colorRouter.post("/", colorController.createColor);
colorRouter.get("/", colorController.findColors);
colorRouter.put("/:id", colorController.updateColor);
colorRouter.delete("/:id", colorController.deleteColor);
