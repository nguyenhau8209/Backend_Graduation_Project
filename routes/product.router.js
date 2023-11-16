const express = require("express");
const productRouter = express.Router();

const productController = require("../controller/product.controller");
module.exports = productRouter;

productRouter.get("/:id", productController.findOneProduct);
productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.findProducts);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);
