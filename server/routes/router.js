import express from "express"
import articleRoutes from "./articleRoutes.js"
import commentRoutes from "./commentRoutes.js"
import replyRoutes from "./replyRoutes.js"
import userRoutes from "./userRoutes.js"

const router = express()


router.use('/articles', articleRoutes)
router.use('/comments', commentRoutes)
router.use('/replies', replyRoutes)
router.use('/users', userRoutes)

export default router