const express = require("express");
const orderItemRouter = express.Router();

const orderItemController = require("../controller/orderItem.controller");
module.exports = orderItemRouter;

orderItemRouter.post("/", orderItemController.createOrderItem);
// orderItemRouter.get("/", orderItemController.getOrders);
// orderItemRouter.get("/:id", orderItemController.getOrder);
// orderItemRouter.delete("/:id", orderItemController.deleteOrder);
