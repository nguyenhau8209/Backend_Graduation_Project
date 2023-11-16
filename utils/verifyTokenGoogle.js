const { OAuth2Client } = require("google-auth-library");
const STATUS_CODE = require("../constants/httpResponseCode");
const dotenv = require("dotenv");
dotenv.config();
const verifyIdToken = async (token) => {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  let googleUser;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    googleUser = ticket.getPayload();
  } catch (error) {
    console.error("Lỗi xác thực token:", error);
    return {
      error: true,
      code: STATUS_CODE.notFounded,
      message: error.message,
    };
  }

  return googleUser;
};

module.exports = verifyIdToken;
