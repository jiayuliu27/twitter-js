var express = require("express");
var app = express();

// other dependencies
var chalk = require("chalk");
var morgan = require("morgan");


var errorStyle = chalk.bold.red;
var requestStyle = chalk.blue.underline;
var responseStyle = chalk.yellow;
var messageStyle = chalk.gray;

app.use(morgan("combined"));
// these requests are processed in order
// will not execute the next matched one unless next()
app.get('/', function(req, res, next) {
	chalk.blue.bgRed.bold("Hello world!");
	console.log(chalk.green("Hello '/' location"), responseStyle(res.statusCode.toString()));
	res.send("Welcome!");
	next();
});

app.use("/special/", function(req, res, next) {
	console.log(messageStyle("you've reached a special area"));
	next();
});

app.use(function(req, res, next) {
	// accepts all requests from any url
	console.log(messageStyle("Accepts all requests"), requestStyle(req.method.toString()), requestStyle(req.path.toString()), responseStyle(res.statusCode.toString()));
	// res.send("Accepts all requests");
	next();
});

app.listen(3000, function(err) {
	if(err) {
		console.log(errorStyle(err.toString()));
		throw err;
	}
	console.log(messageStyle("server listening"));
});