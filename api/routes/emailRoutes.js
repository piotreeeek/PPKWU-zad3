'use strict';
module.exports = function(app) {

  // todoList Routes
  app.route('/check/email/')
    .post(checkEmail);

app.route(random).get(randomApi);

};



function checkEmail(req, res){
    var validator = require('email-validator');

    var result = validator.validate(req.body.email) && req.body.email.slice(-3) == '.pl' && req.body.email.slice(-7) != '.com.pl'
    res.status(200);
    res.json({response: result});
}

function randomApi(req, res){

}


//example
function Square (a) {
    this.a = a
    console.log("Canvas constructor called "+id)
}
Square.prototype = {
    constructor: Square
    , getA: function() {
        return this.a
    }
    , getSurface: function() {
        return a*a;
    }
}

//example
function Square (a) {
    this.a = a
    console.log("Canvas constructor called "+id)
}
Square.prototype = {
    constructor: Square
    , getA: function() {
        return this.a
    }
    , getSurface: function() {
        return a*a;
    }
}
//example
function Triangle (a, h) {
    this.a = a
    this.h = h
    console.log("Canvas constructor called "+id)
}
Square.prototype = {
    constructor: Square
    , getA: function() {
        return this.a
    }
    
    , getSurface: function() {
        return a*a;
    }
}
//example
function Square (a) {
    this.a = a
    console.log("Canvas constructor called "+id)
}
Square.prototype = {
    constructor: Square
    , getA: function() {
        return this.a
    }
    , getSurface: function() {
        return a*a;
    }
}

