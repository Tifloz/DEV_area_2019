const dotenv = require('dotenv').config() /** access environment variable */
const path = require('path')    /** For path binding */
const express = require('express') /** Framework used */
const config = require(path.join(__dirname, './setup/env')) /** App setup */
const router = require(path.join(__dirname, './setup/router')) /** Route gestion */
const firebaseSetup = require(path.join(__dirname, './setup/firebase')) /** Firebase initialize */

/**  setup firebase configuration */
firebaseSetup.InitializeFirebase()


/** Create server instance */
const server = express()

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

/** Route creation */
router.InitializeRoutes(server)

/** Try to start server */
server.listen(config.server.port, () => {
  console.log(`Server started : ${ config.server.address }:${ config.server.port }`)
});