const helper = require('../helpers');

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
				res.render('chatroom')
			}
		},
		'post':{

		}
	}

	return helper.route(routes);	
}