const express = require("express");
const discountCodeRouter = express.Router();

const discountCodeController = require("../controller/discountCode.controller");
module.exports = discountCodeRouter;

discountCodeRouter.get("/:id", discountCodeController.getDiscountCode);
discountCodeRouter.post("/", discountCodeController.createDiscountCode);
discountCodeRouter.get("/", discountCodeController.getDiscountCodes);
discountCodeRouter.put("/:id", discountCodeController.updateDiscountCode);
discountCodeRouter.delete("/:id", discountCodeController.deleteDiscountCode);
