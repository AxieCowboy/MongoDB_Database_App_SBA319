import mongoose from "mongoose"

const userSchema = new mongoose.Schema ({
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true, 
    },

    password: {
      type: String,
      required: true,
    }
    


})

const user = mongoose.model("users", userSchema, "users" )

export default user