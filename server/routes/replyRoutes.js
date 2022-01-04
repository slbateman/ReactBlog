import express from "express"
import {
    getReplies,
    postReply,
    patchReply,
    deleteReply,
  } from "../controllers/replyController.js";

const router = express.Router()

router.get('/', getReplies)
router.post('/', postReply)
router.patch('/:id', patchReply)
router.delete('/:id', deleteReply)

export default router