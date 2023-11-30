const express = require("express");
const cartItemRouter = express.Router();

const cartItemController = require("../controller/cartItem.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = cartItemRouter;

cartItemRouter.post(
  "/",
  middlewareAuth.checkLogin,
  cartItemController.createCartItem
);
cartItemRouter.get("/", cartItemController.getCartItems);
cartItemRouter.get("/:id", cartItemController.getCartItem);
cartItemRouter.put("/:id", cartItemController.updateCartItem);
cartItemRouter.delete("/:id", cartItemController.deleteCartItem);
