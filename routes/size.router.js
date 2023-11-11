const express = require("express");
const sizeRouter = express.Router();

const sizeController = require("../controller/size.controller");
module.exports = sizeRouter;

sizeRouter.get("/:id", sizeController.findSize);
sizeRouter.post("/", sizeController.createSize);
sizeRouter.get("/", sizeController.findSizes);
sizeRouter.put("/:id", sizeController.updateSize);
sizeRouter.delete("/:id", sizeController.deleteSize);
