const express = require('express') /** Framework used */
const env = require('./setup/env') /** App setup */
const router = require('./setup/router') /** Route gestion */
const server = express();
const cron = require("node-cron");
const test = require("./controllers/OpenWeatherAPI");


// Cors setup
const cors = require('./setup/cors')
cors.initalizeCors(server)

// firebase setup
const firebaseSetup = require('./setup/firebase') /** Firebase initialize */
firebaseSetup.InitializeFirebase()

// Twitter setup
const twitter = require('./setup/twitter')
twitter.initalizePassport(env.twitter)

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api.json');
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes setup
router.InitializeRoutes(server);

cron.schedule("* * * * *", function() {
  console.log("running a task every minute");
  test.allTests();
});

// Server start
server.listen(env.server.port, () => {
  console.log(`Server started : ${ env.server.address }:${ env.server.port }`)
});