var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  var bodyParser     =        require("body-parser");
  var app            =        express();
  //Here we are configuring express to use body-parser as middle-ware.
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

var mainRoutes = require('./api/routes/mainRoutes');
var emailRoutes = require('./api/routes/emailRoutes'); //importing route

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mainRoutes(app);
emailRoutes(app); //register the route
  
  

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
