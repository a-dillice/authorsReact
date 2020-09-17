const { mongo } = require("mongoose");

// import
const mongoose = require("mongoose");

// db name
const db = "authors";

mongoose.connect(`mongodb://localhost/${db}`,{
    useUnifiedTopology:true,
    useNewUrlParser:true
// success
}).then(()=>{
    
    // console msg
    console.log("The server has connected to the database.");

// failed
}).catch((err)=>{

    // console msg
    console.log("ERROR: The server was not able to connect to the database!", err);

})
