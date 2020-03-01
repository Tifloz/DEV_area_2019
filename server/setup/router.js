const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')

/** Controllers list */
const userController = require('../routes/user.js')
const homeController = require('../routes/home.js')
const twitterApiController = require('../routes/twitterApi')

/** InitializeRoutes initialize app routes */
exports.InitializeRoutes = function (app)
{
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded( { extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use('/user', userController)
  app.use('/', homeController)
  app.use('/auth', twitterApiController)
}