var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  var bodyParser     =        require("body-parser");
  var app            =        express();
  //Here we are configuring express to use body-parser as middle-ware.
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
var emailRoutes = require('./api/routes/emailRoutes'); //importing route
 emailRoutes(app); //register the route
  
  

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
