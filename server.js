var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// chatCat acts as a middleware so by default the routes provided in the app/index.js will be used
var chatCat = require('./app');
var passport = require('passport');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(chatCat.session);
// Hooks up passport to the request and response streams which express provides
app.use(passport.initialize());
// Hooks up passport with express session middleware
app.use(passport.session());


app.use('/', chatCat.router);
app.get('/information', function (req, res) {
	res.send('Sent from the server.js');
});
app.listen(PORT, function () {
	console.log("Your app has started on port "+PORT);
});