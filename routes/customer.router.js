const express = require("express");
const customerRouter = express.Router();

const customerController = require("../controller/customer.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = customerRouter;

customerRouter.get("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, customerController.getCustomers);
