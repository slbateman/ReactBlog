import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  user_id: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: Array, required: true },
  createdAt: { type: Date, default: new Date(), required: true },
  modifiedAt: { type: Date, default: new Date(), required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, default: "" },
});

const articleModel = mongoose.model("article", articleSchema)

export default articleModel