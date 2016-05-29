var config = require('../config');
var Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error', function (err) {
	console.log('MongoDB Error', err);
});

// Create a Schema that defines the structure for storing user data
var chatUser = new Mongoose.Schema({
	profileId: String,
	fullName: String,
	profilePic: String
});

// Turn this into a model
var userModel = Mongoose.model('chatUser', chatUser);

module.exports = {
	Mongoose,
	userModel
}
