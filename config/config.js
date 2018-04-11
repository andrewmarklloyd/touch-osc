// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
  client: {
    host: process.env.CLIENT_HOST,
    port: process.env.CLIENT_PORT
  },
  server: {
    host: process.env.HOST,
  	port: process.env.PORT
  }
};

module.exports = config;
