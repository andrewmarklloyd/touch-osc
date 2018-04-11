// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
const osc = require('./server/osc');

app.listen(config.express.port, () => {
  console.log('Server started on', config.express.port)
});

app.get('/', function(req, res){
	res.json({hello: 'world'});
})

module.exports = { app };
