'use strict';

module.exports= function(app){
	app.get('/secret', function(req, res) {
	  res.send('Doh');
	});
};