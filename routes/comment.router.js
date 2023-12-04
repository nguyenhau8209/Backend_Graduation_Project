const express = require("express");
const commentRouter = express.Router();

const commentController = require("../controller/comment.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = commentRouter;

commentRouter.post(
  "/",
  middlewareAuth.checkLogin,
  commentController.createComment
);

commentRouter.get("/", commentController.getComment);
