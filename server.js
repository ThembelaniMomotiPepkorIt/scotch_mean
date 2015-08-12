// Modules =============================================================
var express 		= require('express');
var bodyParser 		= require('body-parser');
var methodOverride 	= require('method-override');
var mongoose		= require('mongoose');

var app 			= express()

// Configuration =======================================================

// Config files
var db				= require('./config/db');

var port 			= process.env.PORT ||3000; 

//connnect to our mongoDB database
//Uncomment after you enter in your own credentials in config/db.js
//mongoose is not pulled in here !!!!!
//mongoose.connect(db.url);

//get all data/stuff of the body (POST) parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json content-Type as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded 
//(Applicable to POST method/ In the case of limited suppor for POST)
app.use(bodyParser.urlencoded({extended:true}));

//override with the x-http-method-override header in the request. 
//Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location //public/img will be /img fo users
app.use(express.static(__dirname+'/public'));

//Routes ===============================================================
require('./app/routes')(app);

//start app ============================================================
//startup or app at http://localhost:3000
app.listen(port);

//shoutout to the user
console.log('Magic happnens on port'+ port);

//expose app
exports = module.exports = app;