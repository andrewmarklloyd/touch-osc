const applescript = require('applescript');
const osc = require('node-osc');
const config = require('./config');
const client = new osc.Client(config.client.host, config.client.port);

function newMessage(message) {
	if (message[0].indexOf('/1/fader') == 0) {
		fader(message);
	} else if (message[0].indexOf('/1/toggle') == 0) {
		toggle(message);
	} else if (message[0] === '/1') {
		console.log('switched to page 1')
	} else {
		console.log('No message type recognized:', message)
	}
}

function runAppleScript(script) {
	applescript.execString(script, function(err) {
		if (err) {
		  console.log('error:', err)
		}
	});
}

function sendOscMessage(address, messages) {
	var msg = new osc.Message(address);
	messages.forEach(message => {
		msg.append(message);
	})
	client.send(msg);
}

function fader(message) {
	if (message[0] == '/1/fader5') {
		runAppleScript(`set volume output volume ${message[1] * 100} --100%`);
		sendOscMessage('/1/toggle1', ['0']);
	}
}

function toggle(message) {
	if (message[0] == '/1/toggle1') {
		const script = message[1] == 1 ? 'set volume with output muted' : 'set volume without output muted'
		runAppleScript(script);
	}
}

module.exports = {
	newMessage
}
