const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')

/** Controllers list */
// const authController = require('routes/auth.js')

/** InitializeRoutes initialize app routes */
exports.InitializeRoutes = function (app)
{
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded( { extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser())
//   app.use('/auth', authController)
}