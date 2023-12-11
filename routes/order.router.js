const express = require("express");
const orderRouter = express.Router();

const orderController = require("../controller/order.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = orderRouter;

orderRouter.post("/", middlewareAuth.checkLogin, orderController.createOrder);
orderRouter.get("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [0, 1];
    next()
}, middlewareAuth.checkPermission, orderController.getOrders);
orderRouter.get("/customer/", middlewareAuth.checkLogin, orderController.getOrdersCustomer)
orderRouter.get("/:id", middlewareAuth.checkLogin, orderController.getOrder);
orderRouter.delete("/:id", middlewareAuth.checkLogin, orderController.deleteOrder);
orderRouter.get("/:id", orderController.getOrder);
orderRouter.delete("/:id", orderController.deleteOrder);
orderRouter.put("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [0, 1];
    next()
}, orderController.acceptOrder);
orderRouter.put("/status-order/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [0, 1];
    next()
}, orderController.updateStatusOrder);
