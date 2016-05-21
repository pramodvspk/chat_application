var router = require('express').Router();

router.get('/', function (req, res) {
	res.render('login', {
		pageTitle : 'My Login'
	});
});

router.get('/info', function (req, res) {
	res.send('Test page');
});

module.exports = {
	router: router
}
