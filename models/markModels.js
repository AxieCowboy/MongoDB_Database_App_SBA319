import mongoose from "mongoose" 

const markSchema = new mongoose.Schema ({
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


const mark = mongoose.model("marks", markSchema, "marks")

export default mark