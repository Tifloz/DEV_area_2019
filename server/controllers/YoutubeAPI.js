var express = require('express');
var app = express();
var passport = require('passport');
app.use(passport.initialize());
var YoutubeV3Strategy = require('passport-youtube-v3').Strategy;

passport.use(new YoutubeV3Strategy({
    clientID: YOUR_CLIENT_ID,
    clientSecret: YOUR_CLIENT_SECRET,
    callbackURL: 'http://localhost:8081/redirect',
    scope: ['https://www.googleapis.com/auth/youtube']
},
function (accessToken, refreshToken, profile, cb) {
    var user = {
        accessToken: accessToken,
        refreshToken: refreshToken
    };
    return cb(null, user)
}
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

app.get('/authenticate', passport.authenticate('youtube'))
app.get('/redirect', passport.authenticate('youtube', { failureRedirect: '/login' }),
function(req, res) {
    res.redirect('http://localhost:8081' + '?access_token=' + req.user.accessToken)
})

app.listen(8081)