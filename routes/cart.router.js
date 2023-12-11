const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controller/cart.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = cartRouter;

cartRouter.get("/",middlewareAuth.checkLogin, cartController.getCart);
