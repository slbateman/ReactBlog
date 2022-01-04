import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  avatar: {
    type: String,
    required: true,
    default: "/static/media/the-exorcist.311f0902.jpeg",
  },
  password: { type: String, required: true },
  fName: { type: String },
  lName: { type: String },
  email: { type: String },
  bio: { type: String },
});

const userModel = mongoose.model("user", userSchema);

export default userModel
