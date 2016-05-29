const router = require('express').Router();
const db = require('../db');

// Iterate through the routes and mount the routes on the express routes middleware
// Register the routes on the routers.get // routers.post the express routes provide
let _registerRoutes = function (routes, method) {
	for(var key in routes) {
			// Should be object and null and an array
		if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)){
			_registerRoutes(routes[key], key);
		} else{
			// Register the route
			if(method == 'get'){
				router.get(key, routes[key]);
			}else if(method == 'post'){
				router.post(key, routes[key]);
			}else{
				router.use(routes[key]);
			}
		}
	}
}

var route = function (routes){
	_registerRoutes(routes);
	return router;
}

// FInd a single user based on a profileId
var findOne = function(profileId) {
	return db.userModel.findOne({
		'profileId': profileId
	});
}

var createNewUser = function (profile) {
	return new Promise(function (resolve, reject) {
		var newChatUser = new db.userModel({
			profileId: profile.id,
			fullName: profile.displayName,
			profilePic: profile.photos[0].value || ''
		});

		newChatUser.save(function (error) {
			if(error) {
				console.log("Creation failed");
				reject(error)
			} else {
				resolve(newChatUser);
			}
		})
	});
}

var findById = function (id) {
	return new Promise(function (resolve, reject) {
		db.userModel.findById(id, function (error, user) {
			if(error) {
				reject(error);
			} else {
				resolve(user);
			}
		});
	});
}

var isAuthenticated = function (req, res, next) {
	if(req.isAuthenticated()) {
		next();
	} else {
		res.redirect('/');
	}
}

module.exports = {
	route,
	findOne,
	createNewUser,
	findById
}