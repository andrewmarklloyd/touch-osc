const osc = require('node-osc');
const page1 = require('./page1');
const oscServer = new osc.Server(3000, '0.0.0.0');

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
