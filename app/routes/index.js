const router = require('express').Router();

module.exports = function () {
	let routes = {
		'get':{
			'/': function(req, res, next){
				res.render('login');
			},
			'/rooms': function (req, res, next) {
				res.render('rooms');
			},
			'/chat': function (req, res, next) {
				res.render('chatrooms')
			}
		},
		'post':{

		}
	}

	// Iterate through the routes and mount the routes on the express routes middleware
	// Register the routes on the routers.get // routers.post the express routes provide
	let registerRoutes = function (routes, method) {
		for(var key in routes) {
			if(typeof routes[key] === 'object' && routes[key] !== null && !(routes)){

			}
		}
	}
	
}