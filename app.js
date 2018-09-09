
/*
	Fundamental node code
*/

// var http = require('http');

//create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(1337); //the server object listens on port 1337



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/* 
	Function to use instead of the one defined inline
*/

// var http = require('http');

// var routeHandler = function(req, res){
// 	if(req.url === '/found'){
// 		res.write('Found me!');
// 		res.end();
// 	}else{
// 		res.write('Hello World!');
// 		res.end();
// 	}
// };

// http.createServer(routeHandler).listen(1337);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
	There is a very good web routes framework module that we will use called Express
	You need to make sure you have express installed with npm.
	Readme should have you run 
	>npm i
*/

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/found', function(req, res) {
  res.send('Found me');
});

app.all('*', function(req,res){
	res.send('Else')
})

app.listen(1337, function() {
  console.log('Example app listening on port 1337!');
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~