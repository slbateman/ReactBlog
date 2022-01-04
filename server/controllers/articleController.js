import mongoose from "mongoose";
import articleModel from "../models/articleModel.js";

export const getArticles = async (req, res) => {
  try {
    const articles = await articleModel.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const postArticle = async (req, res) => {
  const article = req.body;
  const newArticle = new articleModel({
    ...article,
    createdAt: new Date().toISOString,
  });
  try {
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const patchArticle = async (req, res) => {
  const { id } = req.params;
  const { title, body, image } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  const updatedArticle = { title, body, image };
  await articleModel.findByIdAndUpdate(id, updatedArticle, { new: true });
  res.json(updatedArticle);
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No article with id: ${id}`);
  await articleModel.findByIdAndRemove(id);
  res.json({ message: "article deleted successfully" });
};
