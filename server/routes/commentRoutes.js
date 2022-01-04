import express from "express"
import {
    getComments,
    postComment,
    patchComment,
    deleteComment,
  } from "../controllers/commentController.js";

const router = express.Router()

router.get('/', getComments)
router.post('/', postComment)
router.patch('/:id', patchComment)
router.delete('/:id', deleteComment)

export default router