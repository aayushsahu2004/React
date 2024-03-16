const User = require("../models/userModel");

exports.home = function(req, res, next){
    res.status(200).json({success: true, message: "This is test route"})
};

exports.createUser = async function(req, res, next){
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({success: true, user: newUser});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};

