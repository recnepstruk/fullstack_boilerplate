// Example2 controller file

// require the example2 model since the route handlers in this controller file will be interacting with the example1 collection in the database
var Example2 = require('../models/examplemodel2.js');

// export an object that contains each route handler function
module.exports = {
    // route handler for creating a new example2 model
    create: (req,res)=>{
        var newExample2 = new Example2(req.body);

        newExample2.save((err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },
    // route handler to get all example2 models in the database
    get: (req, res)=>{
        Example2.find({}, (err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        })
    },
    // route handler to delete an example2 based on a given id
    delete: (req, res)=>{
        Example2.findOneAndRemove({_id: req.params.id}, (err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }
}