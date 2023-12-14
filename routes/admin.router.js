const express = require("express");
const adminController = require("../controller/admin.controller");
const adminRouter = express.Router();
const middlewareAuth = require("../middleware/checkAuth")
module.exports = adminRouter;
// adminRouter.put("/:id", middlewareAuth.checkLogin , adminController.updateUser);
adminRouter.post("/signup", adminController.signUp);
adminRouter.post("/signin", adminController.signIn);
adminRouter.get("/filter", adminController.filterAccount)
adminRouter.put("/restore/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [0, 1];
    next()
}, middlewareAuth.checkPermission, adminController.restoreAccount);

adminRouter.post("/create/account", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, adminController.createAccount);
adminRouter.get("/", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, adminController.getAccounts);
adminRouter.get("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [0, 1];
    next()
}, middlewareAuth.checkPermission, adminController.getAccount);
adminRouter.put("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [0, 1];
    next()
}, middlewareAuth.checkPermission, adminController.updateAccount);
adminRouter.delete("/:id", middlewareAuth.checkLoginAdmin, (req, res, next) => {
    req.permission = [1];
    next()
}, middlewareAuth.checkPermission, adminController.deleteAccount);

