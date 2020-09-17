const mongoose = require("mongoose");

// setup model
const AuthorSchema = new mongoose.Schema({

    // setup name
    name:{
        type:String,
        required:[true, "The author's name is required."],
        minlength:[3, "The author's name requires at least 3 characters."],
        trim:true
    }

// auto timestamp
},{timestamp:true});

// set and export model
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
