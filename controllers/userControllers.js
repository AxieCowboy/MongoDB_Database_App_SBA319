import mongoose from "mongoose"

import User from '../models/userModels.js'

//get all users
export const getUsers = async (req, res) => {
    try {
        const users = await user.find({}).sort({ createdAt: -1 })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({error: "Failed to fetch users"})
    }
}


// Get a single user
export const getUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid user ID" }); 
    }

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" }); 
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user" }); 
    }
};

//create new user

export const createUser = async (req, res) => {
    const { username, password } = req.body

    try{
        const newUser = await user.create({ username, password})
        res.status(200).json(newUser)
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}



//delete user

//update user

