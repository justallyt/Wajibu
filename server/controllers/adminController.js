const User = require("../models/UserModel.js");
const generateToken = require("../utils/generateToken.js");
const asyncHandler = require("express-async-handler");

const RegisterUser = asyncHandler(async(req, res) => {
           const { name, email, password } = req.body;

           const user = await User.create({ name, email, password });

           if(user){
                 res.status(201).json({ message: 'User account created successfully.'})
           }else{
                  throw new Error("Account sign up failed.")
           }
})

exports.RegisterUser = RegisterUser;