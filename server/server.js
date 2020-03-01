const dotenv = require('dotenv').config() /** access environment variable */
const path = require('path')    /** For path binding */
const express = require('express') /** Framework used */
const config = require(path.join(__dirname, './setup/env')) /** App setup */
const router = require(path.join(__dirname, './setup/router')) /** Route gestion */
const firebaseSetup = require(path.join(__dirname, './setup/firebase')) /** Firebase initialize */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api.json');
const cors = require('cors');
/** Twitter require **/
const passport = require('passport');
const TwitterTokenStrategy = require('passport-twitter-token');

/** Twitter keys **/
const TWITTER_CONSUMER_KEY = "bXqO9wUB8OhAohA0ZFDS67B2I";
const TWITTER_CONSUMER_SECRET = "cdcNS9TEfB4qJ2rsrjIP3eK5LfPPhHeQ5V9zzFx9pmjMFAI03P";

/** Init passport for Twitter **/
passport.use(new TwitterTokenStrategy({
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  includeEmail: true,
}, function(token, tokenSecret, profile, done) {
  done(null, profile);
}));

/**  setup firebase configuration */
firebaseSetup.InitializeFirebase()

/** Create server instance */
const server = express()

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/** define CORS */
// Définition des CORS
server.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

/** Define cors for Twitter **/
const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
server.use(cors(corsOption));

/** Route creation */
router.InitializeRoutes(server);

/** Try to start server */
server.listen(config.server.port, () => {
  console.log(`Server started : ${ config.server.address }:${ config.server.port }`)
});