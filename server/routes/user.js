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
router.get('/:user_id/areas', userController.getUserAreas)
router.get('/area/:area_id/trigger', userController.getUserAreaTrigger)
router.get('/area/:area_id/event', userController.getUserAreaEvent)

module.exports = router