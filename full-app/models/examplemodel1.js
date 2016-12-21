// example1 model file

// require mongoose since this file will be setting up the schema and model for example1
var mongoose = require('mongoose');

// define the example2 schema - what the document should look like
var example1Schema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    created: {type: Date, default: ()=>new Date()},
    example2: {
        type: mongoose.Schema.ObjectId,
        ref: "Example2"  //reference to model2 line 16
    } 
});

// setup the mongoose model for example1
// 1st parameter is the collection name - it will automatically lowercase and pluralize it
// 2nd parameter is the Schema
// optional 3rd parameter is the collection name override
module.exports = mongoose.model("Example1", example1Schema);