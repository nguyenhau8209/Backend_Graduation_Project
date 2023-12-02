const express = require("express");
const customerRouter = express.Router();

const customerController = require("../controller/customer.controller");
module.exports = customerRouter;

customerRouter.get("/", customerController.getCustomers);
