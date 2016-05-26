var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// chatCat acts as a middleware so by default the routes provided in the app/index.js will be used
var chatCat = require('./app');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(chatCat.session);

app.use('/', chatCat.router);
app.get('/information', function (req, res) {
	res.send('Sent from the server.js');
});
app.listen(PORT, function () {
	console.log("Your app has started on port "+PORT);
});