const mongoose = require("mongoose");

const connectdb = async ()=> {
    try{
        await mongoose.connect("mongodb+srv://narashima:yiQhsKFCGtA67yiG@cluster0.m95ju.mongodb.net/mudb")
       console.log("Database connected")
    } catch(err){
        console.log(err)
    }
}

module.exports = connectdb
