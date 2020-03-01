const twitterWebhooks = require('twitter-webhooks');

exports.registerActivityWebhook = (app) => {
    const TWITTER_CONSUMER_KEY = "bXqO9wUB8OhAohA0ZFDS67B2I";
    const TWITTER_CONSUMER_SECRET = "cdcNS9TEfB4qJ2rsrjIP3eK5LfPPhHeQ5V9zzFx9pmjMFAI03P";
    const ACCESS_TOKEN =  "1233426003965497345-NC2RmcotSlzDFDf0Jda4gYxzS0na9r"
    const ACCESS_TOKEN_SECRET = "pofcQJAPuv5LeTKfJLLD8HICVQenyJyHAZMo7uCLxQPOq"
    const url = "https://45560951.ngrok.io"
    const userActivityWebhook = twitterWebhooks.userActivity({
        serverUrl: url,
        route: url + '/auth/twitter-hook',
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        accessToken: ACCESS_TOKEN,
        accessTokenSecret: ACCESS_TOKEN_SECRET,
        environment: '../.env',
        app
    });
    userActivityWebhook.register()
    return userActivityWebhook
}