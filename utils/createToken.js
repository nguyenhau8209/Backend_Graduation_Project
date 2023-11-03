const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const accessToken = async (userId) => {
  console.log(userId);
  const token = await jwt.sign({ userId: userId }, process.env.TOKEN_SECRET, {
    expiresIn: "1h",
  });
  console.log(token);
  return token;
};
module.exports = accessToken;
