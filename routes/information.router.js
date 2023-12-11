const express = require("express");
const informationRouter = express.Router();

const informationController = require("../controller/information.controller");
const middlewareAuth = require("../middleware/checkAuth");
module.exports = informationRouter;

informationRouter.get(
  "/:id",
  middlewareAuth.checkLogin,
  informationController.getInformation
);
informationRouter.post(
  "/",
  middlewareAuth.checkLogin,
  informationController.createInformation
);
informationRouter.get(
  "/",
  middlewareAuth.checkLogin,
  informationController.getInformations
);
informationRouter.put(
  "/:id",
  middlewareAuth.checkLogin,
  informationController.updateInformation
);
informationRouter.delete(
  "/:id",
  middlewareAuth.checkLogin,
  informationController.deleteInformation
);
