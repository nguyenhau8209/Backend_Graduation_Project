const express = require("express");
const cartRouter = express.Router();

const cartController = require("../controller/cart.controller");
module.exports = cartRouter;

cartRouter.get("/:id", cartController.getCart);
