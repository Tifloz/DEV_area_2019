const webhook = require('discord-webhook-node');
const http = require('http');

const options = {
    port: 8080,
    host: 'localhost',
    path: '/user/{user_id}/discord',
    method: 'GET',
};
var hook = null;

var req = http.get(options, function (res) {
    var bodyChunks = [];
    res.on('data', function (chunk) {
        bodyChunks.push(chunk);
    }).on('end', function () {
        var body = Buffer.concat(bodyChunks);
        console.log(body);
        if (body != null)
            hook = new webhook.Webhook("https://discordapp.com/api/webhooks/674651298229911553/-lHOyUOJT5yBxbli2FswE6mtdgHiFdEwbteLe9PidtWM0O1kbcU-W-UKsH5I4SGdjT7e");
        else
            hook = new webhook.Webhook("https://discordapp.com/api/webhooks/674651298229911553/-lHOyUOJT5yBxbli2FswE6mtdgHiFdEwbteLe9PidtWM0O1kbcU-W-UKsH5I4SGdjT7e")
    })
});


exports.sendToWH = function () {
    hook.send("Hello there!");
};