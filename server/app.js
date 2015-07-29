/**
 * Created by sarahdoire on 7/29/15.
 */
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

//app.get('/data-request', function(req, res){
//    res.json({message : "Hello"});
//});

app.get('/*', function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get('port'), function(){
    console.log("Hey! Listening on Port: " + app.get('port'));
});