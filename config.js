require('dotenv').config();

const config = {
  port: 5000,
  dbUrlMongoDB: process.env.dbUrlMongoDB,
  API_KEY_JWT: process.env.API_KEY_JWT,
  TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN,
  authToken: "8f403507b0114ec996a501aba313e7874e662c4b00a74131a79b222250f5cc5e"
};

module.exports = config;
