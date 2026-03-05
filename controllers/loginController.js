import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt";

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ msg: "Email is missing!" });
  }
  if (!password) {
    return res.status(400).json({ msg: "Password is missing!" });
  }
  const user = await userSchema.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: "User did not found try to singup" });
  }

  if (!user.isVerified) {
    return res.status(400).json({ msg: "User is not verified!" });
  }

  const passCheck = await bcrypt.compare(password, user.password);
  if (!passCheck) {
    return res.status(400).json({ msg: "Wrong Password!" });
  }

  req.session.isVerified = true;
  req.session.userSchema = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  req.session.save((err) => {
    if (err) {
      return res.status(500).json({ msg: "Session save failed" });
    }

    res.json({ msg: "Login done!" });
  });
};

export default loginController;
