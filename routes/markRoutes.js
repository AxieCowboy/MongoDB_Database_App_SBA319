import express from "express"
import mark from '../models/markModels.js'

const router = express.Router()

router.get("/", (req,res) => {
    res.send("Mark Route is working")
})

// Post a new mark
router.post("/", async (req, res) =>{
    const {author, text} = req.body

    try {
        const newMark = await mark.create({author, text})

        res.status(200).json(newMark)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

export default router