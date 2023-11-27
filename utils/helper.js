const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const hashPw = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

const comparePassWordMd5 = async (password, hashPass) => {
  return await bcrypt.compare(password, hashPass);
};
const generateJwtToken = (data, expireTime = 30) => {
  const signature = jwt.sign({ ...data }, process.env.TOKEN_SECRET, {
    expiresIn: expireTime,
  });
  return signature;
};

const decodeToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET);
};
const HelperApp = { generateJwtToken, decodeToken, hashPw, comparePassWordMd5 };
module.exports = HelperApp;
