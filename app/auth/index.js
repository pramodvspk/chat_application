const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;
const db = require('../db');
const helper = require('../helpers')

module.exports = function () {

	// Invoked when the authorization process ends
	// Invoking done means creating a session variable and storing just the user id which is in the mdb
	passport.serializeUser( function (user, done) {
		done(none, user.id);
	});

	passport.deserializeUser( function (id, done) {
		// Find and fetch the user based on the id
		helper.findById(id).then( function (user) {
			done(null, user);
		}).catch( function (error) {
			console.log("Error while getting the user by id")
		});
	});

	var authProcessor = function (accessToken, refreshToken, profile, done) {
		// FInd a user in the local db using profile.id
		// if the user is found, return the user data using the done()
		// if the user is not found locally create a user in the local db and return it
		helper.findOne(profile.id).then(function (result) {
			if(result) {
				done(null, result);
			} else {
				// Create a new user and return it
				helper.createNewUser(profile).then(function (newChatUser) {
					done(null, newChatUser).catch(function (error) {
						console.log("Error in creating a user");
					});
				})
			}
		});
	}
	passport.use(new FacebookStrategy(config.fb), authProcessor);
}