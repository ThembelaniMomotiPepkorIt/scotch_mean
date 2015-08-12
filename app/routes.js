//app/routes.js
//grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app){

	//server routes ======================================================
	//handle theings like api calls
	//authentication routes

	// sample api calls
	app.get('/api/nerds', function(){
		//use mongoose to get all nerds in the database
		Nerd.find(function(err, nerds){
			
			// if error occurs, send the error
			// nothing after res.send(err) will execute
			if (err){
				res.send(err);
			}
			res.json(nerds);   //formats response
		});
	});

	//route to handle creating goes here (app.post)
	//route to handle delete goes here (app.delete)

	// front routes =====================================================
	//route to handle all angular requests.
	app.get('*', function(req, res){
		res.sendFile('./public/views/index.html');
	});
}