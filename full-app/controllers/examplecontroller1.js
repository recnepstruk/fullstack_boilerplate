// Example1 controller file

// require the example1 model since the route handlers in this controller file will be interacting with the example collection in the database
var Example1 = require('../models/examplemodel1.js');

// export an object that contains each route handler function
module.exports = {
    // route handler for creating a new Example1
    create: (req,res)=>{
        var newExample1 = new Example1(req.body);

        newExample1.save((err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },
    // route handler to get all Example1 models in the database
    get: (req, res)=>{
        Example1.find({}).populate('example2').exec((err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        });
    },
    // route handler to delete an example1 based on a given id
    delete: (req, res)=>{
        Example1.findOneAndRemove({_id: req.params.id}, (err, data)=>{
            if(err){
                res.send(err);
            } else {
                res.send(data);
            }
        })
    }
}