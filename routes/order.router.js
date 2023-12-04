const express = require("express");
const orderRouter = express.Router();

const orderController = require("../controller/order.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = orderRouter;

orderRouter.post("/", orderController.createOrder);
orderRouter.get("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, orderController.getOrders);
orderRouter.get("/:id", orderController.getOrder);
orderRouter.delete("/:id", orderController.deleteOrder);
