const express = require("express");
const orderRouter = express.Router();

const orderController = require("../controller/order.controller");
module.exports = orderRouter;

orderRouter.post("/", orderController.createOrder);
orderRouter.get("/", orderController.getOrders);
orderRouter.get("/:id", orderController.getOrder);
orderRouter.delete("/:id", orderController.deleteOrder);
