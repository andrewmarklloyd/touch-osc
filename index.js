const osc = require('node-osc');
const page1 = require('./page1');
const config = require('./config');
const oscServer = new osc.Server(config.server.port, config.server.host);

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
	}
});
