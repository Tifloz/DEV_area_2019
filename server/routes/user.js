const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Setting up user's routes
router
    .get('/signIn', userController.SignInPage)
    .post('/signIn', userController.SignIn)

router
    .get('/signUp', userController.SignUpPage)
    .post('/signUp', userController.SignUp)

router.get('/signOut', userController.signOut)

router.post('/google', userController.googleAuth)

router.get('/:user_id/areas', userController.getUserAreas)

router.get('/user/:user_id/area/:area_id', userController.getUserArea)
router.post('/user/:user_id/create-area', userController.createUserArea)

module.exports = router