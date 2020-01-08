const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/** Set Up user routes */
router.get('/login', userController.loginPage)
router.post('/login', userController.loginSubmit)

module.exports = router