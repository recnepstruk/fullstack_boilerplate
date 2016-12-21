// require Examples controllers - this contains the example api route handlers
var Example1 = require('./controllers/Examplecontroller1.js');
var Example2 = require('./controllers/Examplecontroller2.js');

// export a function that takes the app object as an argument and sets up the routes
module.exports = (app)=>{

    // home route
    app.get('/', (req, res)=>{
        res.sendFile("index.html", {root: "./public/html"});
    });

    // Example1 api endpoints
    app.post('example1/url', Example1.create);
    app.get('example1/anotherUrl', Example1.get);
    app.delete('example1/thirdUrl/:id', Example1.delete);

    // Example2 api endpoints
    app.post('example2/url', Example2.create);
    app.get('example2/anotherUrl', Example2.get);
    app.delete('example2/thirdUrl/:id', Example2.delete);
}