const request = require('request');
const jwt = require('jsonwebtoken');

const createToken = function(auth) {
  return jwt.sign({
      id: auth.id
    }, 'my-secret',
    {
      expiresIn: 60 * 120
    });
};

exports.generateToken = function (req, res, next) {
  req.token = createToken(req.auth);
  return next();
};

exports.sendToken = function (req, res) {
  res.setHeader('x-auth-token', req.token);
  return res.status(200).send(JSON.stringify(req.user));
};

exports.prepareToken = function (req, res, next) {
  if (!req.user) {
    return res.send(401, 'User Not Authenticated');
  }
  // prepare token for API
  req.auth = {
    id: req.user.id
  };
  return next();
};

exports.twitterAuth = (req, res) => {
  request.post({
    url: 'https://api.twitter.com/oauth/request_token',
    oauth: {
      oauth_callback: "http%3A%2F%2Flocalhost%3A8081%2FcreateArea",
      consumer_key: 'bXqO9wUB8OhAohA0ZFDS67B2I',
      consumer_secret: 'cdcNS9TEfB4qJ2rsrjIP3eK5LfPPhHeQ5V9zzFx9pmjMFAI03P'
    }
  }, function (err, r, body) {
    if (err) {
      return res.send(500, { message: err.message });
    }

    const jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
    res.send(JSON.parse(jsonStr));
  });
};

exports.twitterAuthReverse = (req, res, next) => {
  request.post({
    url: `https://api.twitter.com/oauth/access_token?oauth_verifier`,
    oauth: {
      consumer_key: 'bXqO9wUB8OhAohA0ZFDS67B2I',
      consumer_secret: 'cdcNS9TEfB4qJ2rsrjIP3eK5LfPPhHeQ5V9zzFx9pmjMFAI03P',
      token: req.query.oauth_token
    },
    form: { oauth_verifier: req.query.oauth_verifier }
  }, function (err, r, body) {
    if (err) {
      return res.send(500, { message: err.message });
    }

    const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
    const parsedBody = JSON.parse(bodyString);

    req.body['oauth_token'] = parsedBody.oauth_token;
    req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
    req.body['user_id'] = parsedBody.user_id;

    next();
  });
};