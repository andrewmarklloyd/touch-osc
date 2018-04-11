const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const config = require('./config');


// Initialize the server
http.listen(5000, function(){
	const port = http.address().port;
	console.log('STATUS Server listening on port', port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/api/v1', routes);


module.exports = { app, io };
