import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  article_id: { type: String, required: true },
  user_id: { type: String, required: true },
  comment: { type: String, required: true },
});

const commentModel = mongoose.model("comment", commentSchema)

export default commentModel
