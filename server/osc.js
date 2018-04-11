const osc = require('node-osc');
const config = require('../config/config');
const oscServer = new osc.Server(config.osc.port, config.osc.host);
const client = new osc.Client(config.client.host, config.client.port);
const Page1 = require('./page1');
const page1 = new Page1(client);

oscServer.on('message', function (message, rinfo) {
	switch (message[0].substring(0,2)) {
		case '/1':
			page1.newMessage(message);
			break;
		case '/2':
			break;
		case '/3':
			break;
		case '/4':
			break;
		case '/p':
			console.log('ping')
			break;
	}
});