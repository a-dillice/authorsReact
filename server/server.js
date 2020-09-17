// import express
const express = require("express"),

// import cors
cors = require("cors"),

// setup app
app = express(),

// setup port
port = 8000,

// server listing on port
server = app.listen(port, () => {
   console.log(`The server running on port...${port}`);
});

// setup uses
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


// import config and router
require('./config/config');
const myRoutes = require("./routes/routes");
myRoutes(app);