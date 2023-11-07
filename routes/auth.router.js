const express = require("express");
const userController = require("../controller/user.controller");
const authRouter = express.Router();

module.exports = authRouter;

authRouter.post("/login", userController.login);
