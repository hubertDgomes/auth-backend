import mongoose from "mongoose";
import { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userProfile",
      required: true,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("usersNote" , noteSchema)