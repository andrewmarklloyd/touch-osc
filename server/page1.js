const osc = require('node-osc');
const Observable = require('rxjs/Observable').Observable;

var faderCount = 0;

var Page1 = function(client) {
	var self = this;
	this.client = client;
	this.observable = Observable.create((observer) => {
		this.observer = observer;
	});
}

Page1.prototype.newMessage = function(message) {
	if (message[0].indexOf('/1/fader') == 0) {
		this.fader(message);
	} else if (message[0].indexOf('/1/toggle') == 0) {
		this.toggle(message);
	} else if (message[0] === '/1') {
		console.log('switched to page 1');
	} else {
		console.log('No message type recognized:', message);
	}
}

Page1.prototype.sendOscMessage = function (address, messages) {
	const msg = new osc.Message(address);
	messages.forEach(message => {
		msg.append(message);
	})
	this.client.send(msg);
}

Page1.prototype.fader = function (message) {
	if (message[0] == '/1/fader5') {
		this.sendOscMessage('/1/toggle1', ['0']);
		this.observer.next({type: 'fader5', data: message[1]})
	}
}

Page1.prototype.toggle = function (message) {
	if (message[0] == '/1/toggle1') {
		
	}
}

Page1.prototype.register = function(){
	return this.observable;
}

module.exports = Page1
