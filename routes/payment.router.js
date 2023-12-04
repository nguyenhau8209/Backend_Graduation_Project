const express = require("express");
const paymentRouter = express.Router();

const paymentController = require("../controller/payment.controller");
module.exports = paymentRouter;

paymentRouter.get("/", paymentController.statistics);
