import mongoose from "mongoose";

const replySchema = mongoose.Schema({
  comment_id: { type: String, required: true },
  user_id: { type: String, required: true },
  reply: { type: String, required: true },
});

const replyModel = mongoose.model("reply", replySchema)

export default replyModel