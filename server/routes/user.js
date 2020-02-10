const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Setting up user's routes
router.get('/signIn', userController.SignInPage)
router.post('/signIn', userController.SignIn)
router.get('/signUp', userController.SignUpPage)
router.post('/signUp', userController.SignUp)
router.get('/signOut', userController.signOut)
router.post('/google', userController.googleAuth)

module.exports = router