if(process.env.NODE_ENV === 'production') {
	// Exporting an object directly 
	module.exports = {
		host: process.env.host || "",
		dbURI: process.env.dbURI,
		sessionSecret: process.env.sessionSecret
	}
} else {
	// Export the json file which has the local host and the dbURI 
	module.exports = require('./development.json');
}