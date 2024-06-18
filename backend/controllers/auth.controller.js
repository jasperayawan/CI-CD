const User = require('../models/user.model')
const router = require("express").Router();
const bcrypt = require("bcrypt");
const generateTokenAndSetCookie = require('../utils/generateToken');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds)

const signUp = async (req, res) => {
    const { fullName, username, email, password, cPassword, gender } = req.body;

    try{
        if(password !== cPassword){
            res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ email });

        if (user) throw new Error("Username already exist");

        const hashedPassword = bcrypt.hashSync(password, salt)

        const newUser = new User({
            fullName,
            username,
            email,
            password: hashedPassword,
            gender
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email
            })
        } else {
            res.status(400).json({ error: "Invalid user data" })
        }
    }
    catch(error){
        console.log("Error in signup controller", error.message)
        res.status(500).json(error)
    }
}

module.exports = { signUp }