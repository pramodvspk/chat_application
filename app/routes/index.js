var helper = require('../helpers');
var passport = require('passport');

module.exports = function () {
	let routes = {
		'get':{
			'/': function(req, res, next){
				res.render('login');
			},
			'/rooms':[ helper.isAuthenticated, function (req, res, next) {
				res.render('rooms', {
					user: req.user
				});
			}],
			'/chat':[helper.isAuthenticated, function (req, res, next) {
				res.render('chatroom', {
					user: req.user
				});
			}],
			'/auth/facebook': passport.authenticate('facebook'),
			'/auth/facebook/callback': passport.authenticate('facebook', {
				successRedirect: '/rooms',
				failureRedirect: '/'
			}),
			'/auth/twitter': passport.authenticate('twitter'),
			'/auth/twitter/callback': passport.authenticate('twitter', {
				successRedirect: '/rooms',
				failureRedirect: '/'
			}),
			'logout': function (req, res, next) {
				req.logout();
				res.redirect('/');
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