import mongoose from "mongoose";
import commentModel from "../models/commentModel.js";

export const getComments = async (req, res) => {
  try {
    const comments = await commentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postComment = async (req, res) => {
  const comment = req.body;
  const newComment = new commentModel({
    ...comment,
    createdAt: new Date().toISOString,
  });
  try {
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const patchComment = async (req, res) => {
  const { id } = req.params;
  const { title, body, image } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  const updatedComment = { title, body, image };
  await commentModel.findByIdAndUpdate(id, updatedComment, { new: true });
  res.json(updatedComment);
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  await commentModel.findByIdAndRemove(id);
  res.json({message: "comment deleted successfully"})
};
