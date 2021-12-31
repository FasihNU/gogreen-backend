
// File Modules
const bcryptModule = require("../config/bcryptModule");
const VerifyEmailModel = require("../models/VerifyEmailModel");




let verifyEmail = async (email, verifyEmailToken) => {
  try {
    let verify = await VerifyEmailModel.findOne({ userEmail: email });
    // console.log(verify);
    if (!verify) return false;



    let validPassword = bcryptModule.ComputeSaltHash( verifyEmailToken, verify.verifyEmailToken);




    if (!validPassword) return false;

    verify.verified = true;

    await verify.save();

    return true;

  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports.verifyEmail = verifyEmail;
