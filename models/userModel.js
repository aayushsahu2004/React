const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        trim: true,
        unique: true,
        required: [true, "Username is required"],
        minLength: [3, "Username must be at least 3 characters"]
    },
    email:{
        type: String,
        lowercase: true,
        required:[true, "email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
    },
    password:{
        type: String,
        trim:true,
        required: [true, "Password is required"],
        minLength: [3, "Paasword must be at least 8 characters"],
        maxLength: [15, "Password must be at most 15 character"]
    }
},{timestamps: true});

const user = mongoose.model('user', userSchema);
module.exports = user;