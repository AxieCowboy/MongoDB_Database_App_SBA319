import express from 'express'
import mongoose from 'mongoose'
import routes from "./routes/userRoutes.js"
import dotenv from "dotenv"

// Routes
import userRoutes from "./routes/userRoutes.js";
import markRoutes from "./routes/markRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";


// Init App
const app = express ()
const port = 8060

// Config
dotenv.config()

app.use(express.json())  // Middleware to parse JSON request bodies
app.use("/comments",commentRoutes)
app.use("/marks", markRoutes)
app.use("/users", userRoutes)

mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(port, () =>{
        console.log('listening to port: ', port)
    }) 
})


