const express = require("express");
const customerRouter = express.Router();

const customerController = require("../controller/customer.controller");
const middlewareAuth = require("../middleware/checkAuth");
const userController = require("../controller/user.controller");
module.exports = customerRouter;

customerRouter.get("/filter", userController.filterUser);
customerRouter.get("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, customerController.getCustomers);
