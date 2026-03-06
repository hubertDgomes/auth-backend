import userSchema from "../models/userSchema.js";

const otpControllers = async (req, res) => {
  const { email, otp } = req.body;
  if (!email) {
    return res.status(400).json({ msg: "Email is missing!" });
  }
  if (!otp) {
    return res.status(400).json({ msg: "OTP is missing!" });
  }
  const user = await userSchema.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "User not found!" });
  }
  if (user.otp != otp || user.expOtp < Date.now()) {
    return res.status(400).json({ msg: "Invalid OTP or OTP timeout." });
  }
  (user.otp = undefined),
  (user.expOtp = undefined),
  (user.isVerified = true)
  user.save();
  res.json({ msg: "The email is verified!" });
};

export default otpControllers;
