// config should be imported before importing any other file
const config = require('./config/config');
const express = require('express');
const { app, io } = require('./config/express');
const osc = require('./server/osc');

app.listen(config.express.port, () => {
  console.log('Server started on', config.express.port)
});

io.on('connection', function(socket){
	io.emit('faderCount', { data: 0 });
});

osc.registerFaderCount().subscribe(d => {
	io.emit('faderCount', { data: d });
})

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


module.exports = { app };
