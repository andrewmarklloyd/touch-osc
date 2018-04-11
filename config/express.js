const express = require('express');
const config = require('./config');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const distDir = __dirname + "/../dist/";
app.use(express.static(distDir));

//app.use('/api/v1', routes);
server.listen(config.server.port, function(){
	const port = server.address().port;
	console.log('Server listening on port', port);
});


module.exports = { io };
