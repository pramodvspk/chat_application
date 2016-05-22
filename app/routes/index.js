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

		},
		'NA': function (req, res, next) {
			res.status(404).sendFile(process.cwd() + '/views/404.htm');
		}
	}
	
	return helper.route(routes);	
}