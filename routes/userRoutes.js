import express from "express"
//import user from '../models/userModels.js'

import { createUser, getUser, getUsers } from "../controllers/userControllers.js"

const router = express.Router()

//Get all Users
router.get("/", getUsers)

// Get a single user
router.get("/:id", getUser)

// POST a new user
router.post("/", createUser);

router.delete("/:id", (req, res) => {

    res.send("DELETE user")
})


router.patch("/:id", (req, res) => {

    res.send("UPDATE user")
})


export default router