import profileSchema from "../models/profileSchema.js";
import userSchema from "../models/userSchema.js";

const createProfile = async (req, res) => {
  if (!req.session.isVerified) {
    return res.status(400).json({ msg: "Please log in first!" });
  }
  const { bio, dateOfBirth, place, nationality } = req.body;


  const duplicateProfile = await profileSchema.findOne({
    user: req.session.userSchema.id,
  });
  if (duplicateProfile) {
    return res.status(400).json({ msg: "Profile already created" });
  }

  const profile = profileSchema({
    user: req.session.userSchema.id,
    bio,
    dateOfBirth,
    place,
    nationality,
  });

  profile.save();
  res.json({ msg: "Profile updated!" });
};

export default createProfile;
