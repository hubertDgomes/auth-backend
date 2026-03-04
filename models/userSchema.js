import mongoose from "mongoose";
import { Schema } from "mongoose";
import { type } from "os";

const userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    otp : String,
    expOtp : Date,
    ifProfileCreated : {
      type : Boolean,
      default : false
    }
  },
  { timestamps: true },
);

export default mongoose.model("usersData", userSchema);
