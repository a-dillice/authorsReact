const Model = require("../models/models");

// setup functions
module.exports = {

    // index/list all operation
    index:(req, res) => {

        // select all - alphabetical with sort
        Model.find().sort({name:1}).then((data) => {

            // send out data
            res.json({results:data})

        }).catch((err) => {

            // send out err msg
            res.json({errors:err.errors})

        })

    },
    // show one operation
    show:(req, res) => {
        
        // get user id
        const id = req.params._id;

        // select one
        Model.findOne({_id:id}).then((data) => {

            // send out data
            res.json({results:data})

        }).catch((err) => {

            // send out err msg
            res.json({errors:err.errors})

        })

    },
    // create operation
    create:(req, res) => {
        
        // get data from user
        const userData = req.body;
        
        // add data to table/collection
        Model.create(userData).then((data) => {

            // send data data
            res.json({results:data, success:`${data.name} was successfully added.`})
        
        // catch errors
        }).catch((err) => {

            // send out err msg
            res.json({errors:err.errors})
            
        })

    },
    // update operation
    update:(req, res) => {
        
        // get id
        const id = req.params._id;
        
        // get user data
        const userData = req.body;
        
        // find and update our product
        Model.findOneAndUpdate({_id:id}, userData, {
            useFindAndModify:false,
            runValidators:true, 
            new:true
        // success
        }).then((data) => {

            // pass data to results 
            res.json({results:data, success: `${data.name} was successfully updated.`});

        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        }); 

    },
    // delete operation
    destroy:(req, res) =>{

        // get id
        const id = req.params._id;

        // delete document based on id
        Model.deleteOne({_id:id}).then((data) => {
            
            // pass data to results 
            res.json({success:"Delete was successful."});
            
        // catch errors
        }).catch((err) => {

            // pass err to errors 
            res.json({errors:err.errors}); 

        });

    }

}