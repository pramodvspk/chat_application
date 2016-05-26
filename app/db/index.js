var config = require('../config');
var Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error', function (err) {
	console.log('MongoDB Error', err);
});

module.exports = {
	Mongoose
}
