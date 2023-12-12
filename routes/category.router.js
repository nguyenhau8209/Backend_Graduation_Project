const express = require("express");
const categoryRouter = express.Router();

const categoryController = require("../controller/category.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = categoryRouter;

categoryRouter.get("/filter", categoryController.filterCategory)
categoryRouter.post("/admin/category", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, categoryController.createCategory);
categoryRouter.get("/categories", categoryController.findCategories);
categoryRouter.get("/category/:id", categoryController.findOneCategory);
categoryRouter.put("/category/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, categoryController.updateCategory);
categoryRouter.delete("/category/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, categoryController.deleteCategory);
categoryRouter.post("/category/:id", categoryController.restoreCategory);
