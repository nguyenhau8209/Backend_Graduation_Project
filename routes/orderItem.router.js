const express = require("express");
const orderItemRouter = express.Router();

const orderItemController = require("../controller/orderItem.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = orderItemRouter;

orderItemRouter.post(
  "/",
  middlewareAuth.checkLogin,
  orderItemController.createOrderItem
);
// orderItemRouter.get("/", orderItemController.getOrders);
// orderItemRouter.get("/:id", orderItemController.getOrder);
// orderItemRouter.delete("/:id", orderItemController.deleteOrder);
