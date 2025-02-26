const mongoose = require("mongoose");

const Player = mongoose.Schema({
    first_name : {
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
    phone : {
        type: Number,
        require: true
    },
    role : {
        type: String,
        require: true
    },
    available: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model("Player", Player)