import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  storedResetToken: { type: String },
  resetTokenExpiry: { type: Date },
});

const User = mongoose.model("User", userSchema);
export default User;
