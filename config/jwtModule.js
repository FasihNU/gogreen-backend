const fs = require("fs");
const jwt = require("jsonwebtoken");

require('dotenv').config();



exports.sign = async function (payload, id) {
  // console.log("payload : " , payload);
  // console.log("id : " + id);

  let signOptions = {
    expiresIn: parseInt(process.env.TOKEN_EXPIRY_TIME)
  };
  try {
  // console.log("TOKEN_EXPIRY_TIME : " + process.env.TOKEN_EXPIRY_TIME );

    return await jwt.sign(payload, process.env.TOKEN_KEY , signOptions);

} catch (error) {
  console.log("try catch error : " , error);
  return;
}
};

exports.verify = async function (token) {
  try {

    return jwt.verify(token, process.env.TOKEN_KEY);

  } catch (error) {
    return;
  }
};
