var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var config = require('../config');
var db = require('../db');
// Express sessions module provides us with a middleware function
if(process.env.NODE_ENV === 'production') {
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: false,
		// Store is where the session data is stored
		store: new MongoStore({
			mongooseConnection: db.Mongoose.connection
		})
	});
} else {
	module.exports = session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: true
	});
}