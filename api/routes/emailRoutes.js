'use strict';
module.exports = function(app) {

  // todoList Routes
  app.route('/check/email/:email')
    .get(checkEmail);

};


function checkEmail(req, res){
    res.send(200).body(req.param.email);
    res.json(req.param.email);
}
