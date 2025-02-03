import express from "express"
import comment from '../models/commentModels.js'

const router = express.Router()

// Post a new comment
router.post("/", async (req, res) =>{
    const {author, text} = req.body

    try {
        const newComment = await comment.create({author, text})

        res.status(200).json(newComment)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

router.get("/", (req,res) => {
    res.send("Comment Route is working")
})

export default router