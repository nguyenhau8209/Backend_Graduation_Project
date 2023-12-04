const express = require("express");
const adminController = require("../controller/admin.controller");
const adminRouter = express.Router();
const middlewareAuth = require("../middleware/checkAuth")
module.exports = adminRouter;
// adminRouter.put("/:id", middlewareAuth.checkLogin , adminController.updateUser);
adminRouter.post("/signup", adminController.signUp);
adminRouter.post("/signin", adminController.signIn);
adminRouter.get("/", adminController.getAccounts);
adminRouter.get("/:id", adminController.getAccount);
adminRouter.put("/:id", adminController.updateAccount);
adminRouter.delete("/:id", adminController.deleteAccount);

