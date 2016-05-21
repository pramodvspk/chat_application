const router = require('express').Router();

module.exports = function () {
	console.log("Requestiing this function")
	let routes = {
		'get':{
			'/': function(req, res, next){
				res.render('login');
			},
			'/rooms': function (req, res, next) {
				res.render('rooms');
			},
			'/chat': function (req, res, next) {
				res.render('chatroom')
			}
		},
		'post':{

		}
	}

	// Iterate through the routes and mount the routes on the express routes middleware
	// Register the routes on the routers.get // routers.post the express routes provide
	let registerRoutes = function (routes, method) {
		console.log("In this registerRoutes function")
		for(var key in routes) {
				// Should be object and null and an array
			if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)){
				registerRoutes(routes[key], key);
			} else{
				// Register the route
				if(method == 'get'){
					router.get(key, routes[key]);
				}else if(method == 'post'){
					router.post(key, routes[key]);
				}
			}
		}
	}

	registerRoutes(routes);
	return router;
	
}