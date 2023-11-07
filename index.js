const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const authRouter = require("./routes/auth.router");
const categoryRouter = require("./routes/category.router");
const fileUpload = require("express-fileupload");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const app = express();
const db = require("./models");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
//auth
app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

db.sequelize.sync().then(() => {
  app.listen(PORT ? PORT : 3000, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
