const express = require('express');
const router = express.Router();
const passport = require('passport');
const twitterApiController = require('../controllers/twitterApiController');

/**  Twitter api connection **/
router.route('/twitter/reverse')
  .post(twitterApiController.twitterAuth)

router.route('/twitter')
  .post(twitterApiController.twitterAuthReverse,
  passport.authenticate('twitter-token', {session: false}),
  twitterApiController.prepareToken,
  twitterApiController.generateToken,
  twitterApiController.sendToken)

module.exports = router;