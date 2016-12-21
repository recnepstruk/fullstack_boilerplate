// example2 model file

// require mongoose since this file will be setting up the schema and model for example2
var mongoose = require('mongoose');

// define the example2 schema - what the document should look like
var example2Schema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    location: String,
});

// setup the mongoose model for example1 to get example2
// 1st parameter is the collection name - it will automatically lowercase and pluralize it
// 2nd parameter is the Schema
// optional 3rd parameter is the collection name override
module.exports = mongoose.model("Example2", example2Schema);