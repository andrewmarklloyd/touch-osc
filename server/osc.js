const osc = require('node-osc');
const config = require('../config/config');
const Observable = require('rxjs/Observable').Observable;
const oscServer = new osc.Server(config.server.port, config.server.host);
const client = new osc.Client(config.client.host, config.client.port);
const Page1 = require('./page1');
const page1 = new Page1(client);
var pingObserver;

var OscInterface = function(client) {
	this.pingObservable = Observable.create((observer) => {
		pingObserver = observer;
	});
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
				pingObserver.next()
				break;
		}
	});
}

OscInterface.prototype.register = function(){
	return page1.register();
}

OscInterface.prototype.registerPing = function(){
	return this.pingObservable;
}


module.exports = OscInterface;
