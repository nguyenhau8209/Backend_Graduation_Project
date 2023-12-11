const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("freedb_graduation_project", "freedb_nguyenhau8209", "E$?Ww?ZDwH?2DWr", {
  host: "sql.freedb.tech",
  dialect: "mysql",
});

const connectionDatatbase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectionDatatbase;
