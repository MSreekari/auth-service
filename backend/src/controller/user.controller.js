const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ error : "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password : hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message : "User created successfully",
            user : { id : newUser.__id, name : newUser.name, email : newUser.email },
        });
    }catch(error){
        res.status(500).json({ error : error.message });
    }
}

const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ error : "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ error : "Invalid credentials" });
        }

        const token = jwt.sign(
            { id : user.__id, email : user.email },
            process.env.JWT_SECRET,
            { expiresIn : process.env.JWT_EXPRESS_IN || "1d" },
        );

        res.status(200).json({
            message : "Login successful",
            token,
            user : { id : user.__id, name : user.name, email : user.email },
        });
    }catch(error){
        res.status(500).json({ error : error.message });
    }
}

module.exports = { register, login };
