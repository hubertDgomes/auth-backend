import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";
import crypto from 'crypto'
import emailVar from "../helper/emailVar.js";

const signupControllers = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    return res.status(400).json({ msg: "The name is missing!" });
  }
  if (!email) {
    return res.status(400).json({ msg: "The email is missing!" });
  }
  if (!password) {
    return res.status(400).json({ msg: "The password is missing!" });
  }

  const duplicateUser = await userSchema.findOne({ email });
  if (duplicateUser) {
    return res.status(400).json({ msg: "The user is already registered!" });
  }

  const otp = crypto.randomInt(100000, 999999).toString();
  const expOtp = new Date (Date.now() + 10*60*1000)

  bcrypt.hash(password, 10, function (err, hash) {
    const user = userSchema({
      name,
      email,
      password : hash,
      otp : otp,
      expOtp
    });
    emailVar(email , otp , name)
    user.save();
    res.json({ msg: "The data has been submited" });
  });
};

export default signupControllers;
