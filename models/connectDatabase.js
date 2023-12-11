const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const fs = require("fs");
dotenv.config();
const sequelize = new Sequelize(process.env.TIDB_DB_NAME, process.env.TIDB_USER, process.env.TIDB_PASSWORD, {
  host: process.env.TIDB_HOST,
  dialect: 'mysql',
  port: process.env.TIDB_PORT,
  // Các tùy chọn Sequelize khác...
  dialectOptions: {
    ssl:
        process.env?.TIDB_ENABLE_SSL === 'true'     // (Optional) Enable SSL
            ? {
              minVersion: 'TLSv1.2',
              rejectUnauthorized: true,
              ca: process.env.TIDB_CA_PATH          // (Optional) Path to the custom CA certificate
                  ? fs.readFileSync(process.env.TIDB_CA_PATH)
                  : undefined,
            }
            : null,
  },
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
