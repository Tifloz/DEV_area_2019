const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

/** Set Up user routes */
router.get('/home', homeController.homePage)
router.get('/services', homeController.getServices)

module.exports = router