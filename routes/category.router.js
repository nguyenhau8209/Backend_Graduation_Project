const express = require("express");
const categoryRouter = express.Router();

const categoryController = require("../controller/category.controller");
module.exports = categoryRouter;

categoryRouter.post("/admin/category", categoryController.createCategory);
