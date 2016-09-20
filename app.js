var express = require('express');
var app = express();

app.listen(3000, function(err) {
	if(err) throw err;
	console.log("server listening");
});

app.get('/', function(req, res, next) {
	res.send("Welcome!");
});