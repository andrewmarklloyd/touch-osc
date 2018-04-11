// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
  client: {
    host: process.env.CLIENT_HOST,
    port: process.env.CLIENT_PORT
  },
  osc: {
    host: process.env.OSC_HOST,
    port: process.env.OSC_PORT
  },
  express: {
  	port: process.env.EXPRESS_PORT
  }
};

module.exports = config;
