const mongoose = require('mongoose');

exports.dbConnection = async () =>{
    try {
        mongoose.connect(process.env.Mongo_Url)
        console.log("Connection Established ! ");
    } catch(error){
        console.log(error.message);
    }
}