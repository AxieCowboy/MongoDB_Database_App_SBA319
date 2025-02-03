import mongoose from "mongoose"

const commentSchema = new mongoose.Schema ({
    author: {
        type: String,
        required: true,
        trim: true
    },

    text: {
        type: String,
        required: true,
        trim: true
    }, 
}, { timestamps: true})


const comment = mongoose.model("comments", commentSchema, "comments" )

export default comment