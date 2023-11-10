const express = require("express");
const categoryRouter = express.Router();

const categoryController = require("../controller/category.controller");
module.exports = categoryRouter;

categoryRouter.post("/admin/category", categoryController.createCategory);
categoryRouter.get("/categories", categoryController.findCategories);
categoryRouter.get("/category/:id", categoryController.findOneCategory);
categoryRouter.put("/category/:id", categoryController.updateCategory);
categoryRouter.delete("/category/:id", categoryController.deleteCategory);
categoryRouter.post("/category/:id", categoryController.restoreCategory);
