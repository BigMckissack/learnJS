var http = require('http');


//create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080



// function to use instead of the one defined inline
var routeHandler = function(req, res){
	if(req.url === '/found'){
		res.write('Found me!');
		res.end();
	}else{
		res.write('Hello World!');
		res.end();
	}
};

//create a server object:
http.createServer(routeHandler).listen(8080);