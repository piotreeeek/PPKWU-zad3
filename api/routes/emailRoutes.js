'use strict';
module.exports = function(app) {

  // todoList Routes
  app.route('/check/email/')
    .post(checkEmail);

};



function checkEmail(req, res){
    var validator = require('email-validator');

    var result = validator.validate(req.body.email) && req.body.email.slice(-3) == '.pl' && req.body.email.slice(-7) != '.com.pl'
    res.status(200);
    res.json({response: result});
}
