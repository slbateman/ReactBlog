import express from "express";
import {
  getArticles,
  postArticle,
  patchArticle,
  deleteArticle,
} from "../controllers/articleController.js";

const router = express.Router();

router.get("/", getArticles);
router.post("/", postArticle);
router.patch("/:id", patchArticle);
router.delete("/:id", deleteArticle);

export default router;
