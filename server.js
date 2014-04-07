// Module dependencies.
var application_root = __dirname,
express = require( 'express' ), //Web framework
path = require( 'path' ), //Utilities for dealing with file paths
mongoose = require( 'mongoose' ); //MongoDB integration

//create server
var app =express();

//Connect to database
mongoose.connect('mongodb://localhost/user-manager');

//define schema
var Users = new mongoose.Schema({
	firstName: String,
	lastName: String,
	age: Number
});


//Models
var UserModel = mongoose.model( 'Users', Users );


 // Configure server
app.configure( function() {
//parses request body and populates request.body
app.use( express.bodyParser() );

//checks request.body for HTTP method overrides
app.use( express.methodOverride() );

//perform route lookup based on url and HTTP method
app.use(app.router);

//Where to serve static content
app.use( express.static( path.join( application_root, 'main') ) );

//Show all errors in development
app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Routes
app.get( '/api', function( request, response ) {
response.send( 'UserManager API is running' );
});

//Get a list of all users
app.get( '/users', function( request, response ) {
	return UserModel.find( function( err, users ) {
		if( !err ) {
			return response.send( users );
		}else {
			return console.log( err );
		}
	});
});


//Insert a new book
app.post( '/users', function( request, response ) { var user = new UserModel({
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            age: request.body.age
});
user.save( function( err ) {
if( !err ) {
return console.log( 'created' );
} else {
return console.log( err );
} });
return response.send(user); });


//start server
var port = 2222;
app.listen(port, function(){
	console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});


