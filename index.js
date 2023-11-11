const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const authRouter = require("./routes/auth.router");
const categoryRouter = require("./routes/category.router");
const productRouter = require("./routes/product.router");
const sizeRouter = require("./routes/size.router");
const colorRouter = require("./routes/color.router");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const app = express();
const db = require("./models");
const connectionDatatbase = require("./models/connectDatabase");
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
app.use("/product", productRouter);
app.use("/size", sizeRouter);
app.use("/color", colorRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectionDatatbase();
app.listen(PORT ? PORT : 3000, () => {
  console.log(`http://localhost:${PORT}`);
});
