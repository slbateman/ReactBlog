import mongoose from "mongoose";
import userModel from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postUser = async (req, res) => {
  const user = req.body;
  const newUser = new userModel({
    ...user,
    createdAt: new Date().toISOString,
  });
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const patchUser = async (req, res) => {
  const { id } = req.params;
  const { title, body, image } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  const updatedUser = { title, body, image };
  await userModel.findByIdAndUpdate(id, updatedUser, { new: true });
  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  await userModel.findByIdAndRemove(id);
  res.json({ message: "comment deleted successfully" });
};
