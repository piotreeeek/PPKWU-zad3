'use strict';
module.exports = function(app) {

  // todoList Routes
  app.route('/check/email/:email')
    .get(checkEmail);

};

function checkEmail(req, res){
    var validator = require('email-validator');

    var result = validator.validate(req.params.email) && req.params.email.slice(-3) == '.pl' && req.params.email.slice(-7) != '.com.pl'
    res.status(200);
    res.json({message: result});
}
