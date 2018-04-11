// config should be imported before importing any other file
const config = require('./config/config');
const express = require('express');
const { io } = require('./config/express');
const OscInterface = require('./server/osc');
const osc = new OscInterface();

io.on('connection', function(socket){
	io.emit('hello', { data: 0 });
});

osc.register().subscribe(data => {
	io.emit(data['type'], data.data);
})

osc.registerPing().subscribe((ping) => {
	io.emit('ping', ping);
})