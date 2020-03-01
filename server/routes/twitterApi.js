const express = require('express');
const router = express.Router();
const passport = require('passport');
const twitterApiController = require('../controllers/twitterApiController');

/**  Twitter api connection **/
router.route('/auth/reverse')
  .post(twitterApiController.twitterAuth)

router.route('/auth')
  .post(twitterApiController.twitterAuthReverse,
  passport.authenticate('twitter-token', {session: false}),
  twitterApiController.prepareToken,
  twitterApiController.generateToken,
  twitterApiController.sendToken)

module.exports = router;