const router = require('express').Router();

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
			}
		}
	}
}

var route = function (routes){
	_registerRoutes(routes);
	return router;
}

module.exports = {
	route: route
}