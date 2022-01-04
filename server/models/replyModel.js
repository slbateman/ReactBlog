import mongoose from "mongoose";

const replySchema = mongoose.Schema({
  comment_ID: { type: String, required: true },
  user_ID: { type: String, required: true },
  reply: { type: String, required: true },
});

const replyModel = mongoose.model("reply", replySchema)

export default replyModel