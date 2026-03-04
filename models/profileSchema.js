import mongoose from "mongoose";
import { Schema } from "mongoose";

const profileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usersData",
    required: true,
  },
  bio: String,
  dateOfBirth: String,
  place: String,
  nationality: String,
});

export default mongoose.model("userProfile" , profileSchema)