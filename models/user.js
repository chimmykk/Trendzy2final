import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: { 
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verification_token: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean, // Change the data type to Boolean
      required: true,
    }
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
