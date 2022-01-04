import mongoose from "mongoose";
import replyModel from "../models/replyModel.js";

export const getReplies = async (req, res) => {
  try {
    const replies = await replyModel.find();
    res.status(200).json(replies);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postReply = async (req, res) => {
  const reply = req.body;
  const newReply = new replyModel({
    ...reply,
    createdAt: new Date().toISOString,
  });
  try {
    await newReply.save();
    res.status(201).json(newReply);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const patchReply = async (req, res) => {
  const { id } = req.params;
  const { title, body, image } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  const updatedReply = { title, body, image };
  await replyModel.findByIdAndUpdate(id, updatedReply, { new: true });
  res.json(updatedReply);
};

export const deleteReply = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  await replyModel.findByIdAndRemove(id);
  res.json({message: "comment deleted successfully"})
};
