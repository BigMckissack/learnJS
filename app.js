
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
	There is a very good web routes framework module that we will use called: Express
	You need to make sure you have Express installed with npm.
	Readme should have you run 
	>npm i
*/

let express = require('express');
let fs = require('fs');
let path = require('path');
let serverAPI = require('./server/serverAPI.js');
let app = express();
let port = 1337
let viewsRoot = path.join(__dirname + '/assets/views/');
console.log(viewsRoot);

// This line helps you serve your application the files you write
app.use(express.static(path.join(__dirname + '/assets')));
// Now the below line will work in your browser
// http://localhost:1337/views/contentToSend.html

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/found', function(req, res) {
	res.send('Found me');
});

app.get('/content', function(req, res) {
	// res.send('Found me');
	res.sendFile('contentToSend.html', {root:viewsRoot});
});

app.all('*', function(req,res){
	res.send('Else')
})

/* *********************** BUG ALERT ************************
	How can we get line below to affect our app?
	What is actually happening?
	Why is the problem occurring?
*/
serverAPI(app);


app.listen(port, function() {

	// calls this function on the next iteration of the event loop.
	// *example of how code doesnt have to execute in the order it is written in the file*
	process.nextTick(function(){
		console.log('nextTick log');
	})

	// this is a useful function to call code after a timeout length. You could flash something on screen and remove it after a certain length of time.
	let timeoutLength_ms = 20; 
	setTimeout(function(){
		console.log('setTimeout log')
	}, timeoutLength_ms);

	console.log('Example app listening on port 1337!');

});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~