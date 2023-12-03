const express = require("express");
const userController = require("../controller/user.controller");
const authRouter = express.Router();
const middlewareAuth = require("../middleware/checkAuth")
module.exports = authRouter;
authRouter.put("/:id", middlewareAuth.checkLogin , userController.updateUser);
authRouter.post("/login", userController.login);
