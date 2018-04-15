'use strict';
module.exports = function(app) {

    app.route('/api').get(randomApi);

};

function randomApi (req, res) {
    var apis = [
        {name : "Email verifier", url : "http://localhost:3000/check/email", parameters : [{type: "text", name: "email"}]},
        {name : "Square field counter", url : "http://localhost:3000/square/count-field", parameters : [{type: "number", name: "a"}]},
        {name : "Triangular field counter", url : "http://localhost:3000/triangular/count-field", parameters : [{type: "number", name: "a"}, {type: "number", name: "h"}]},
        {name : "Circle field counter", url : "http://localhost:3000/circle/count-field", parameters : [{type: "number", name: "r"}]},
    ];

    res.status(200);
    res.json(apis[Math.floor(Math.random()*apis.length)]);
    //res.json(apis[0]);
}
