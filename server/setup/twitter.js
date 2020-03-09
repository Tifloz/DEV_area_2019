const passport = require('passport');
const TwitterTokenStrategy = require('passport-twitter-token');

exports.initalizePassport = (twitter) => {
    /** Init passport for Twitter **/
    passport.use(new TwitterTokenStrategy({
        consumerKey: twitter.consumer_key,
        consumerSecret: twitter.consumer_secret,
        includeEmail: true,
    }, function(token, tokenSecret, profile, done) {
        done(null, profile);
    }));
}