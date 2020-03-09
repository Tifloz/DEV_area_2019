const dotenv = require('dotenv').config() /** access environment variable */

module.exports = {
    server: {
      port: process.env.SERVER_PORT,
      address: process.env.SERVER_ADDRESS
    },
    twitter: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET
    }
}