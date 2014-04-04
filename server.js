// Module dependencies.
var application_root = __dirname,
express = require( 'express' ), //Web framework
path = require( 'path' ), //Utilities for dealing with file paths
mongoose = require( 'mongoose' ); //MongoDB integration

//create server
var app =express();


//start server
var port = 2222;
app.listen(port, function(){
	console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});


