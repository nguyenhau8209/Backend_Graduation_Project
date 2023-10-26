import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

debug.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
