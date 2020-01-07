const dotenv = require('dotenv').config() /** access environment variable */
const path = require('path')    /** For path binding */
const express = require('express') /** Framework used */
const config = require(path.join(__dirname, './setup/env')) /** App setup */
const router = require(path.join(__dirname, './setup/router')) /** Route gestion */
const firebaseSetup = require(path.join(__dirname, './setup/firebase')) /** Firebase initialize */

/**  setup firebase configuration */
/** Create server instance */
const server = express()

/** Set Default view engine */
server.set('view engine', 'ejs')

/** Route creation */
router.InitializeRoutes(server)

/** Try to start server */
server.listen(config.server.port, () => {
  console.log(`Server started : ${ config.server.address }:${ config.server.port }`)
});