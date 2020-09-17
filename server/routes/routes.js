const Controller = require("../controllers/controller");

// setup urls
module.exports = (app) => {

    // list/index
    app.get("/api", Controller.index);
    
    // create
    app.post("/api/create", Controller.create);
    
    // update
    app.put("/api/update/:_id", Controller.update);
    
    // delete
    app.delete("/api/destroy/:_id", Controller.destroy);
    
    // get/show one
    app.get("/api/:_id", Controller.show);

}
