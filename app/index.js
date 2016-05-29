
//Social authetication logic
require('./auth')();

module.exports = {
	router: require('./routes')(),
	session: require('./session')
}
