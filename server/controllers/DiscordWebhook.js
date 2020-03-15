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
            hook = new webhook.Webhook("https://discordapp.com/api/webhooks/688833200193011819/fbYmFUwTvbzAz-mvLH-kZ518C8C2rC7FR4lVGw8iwd0uUlOZfMIrOwJFNGzQgrcrmGYB");
        else
            hook = new webhook.Webhook("https://discordapp.com/api/webhooks/688833200193011819/fbYmFUwTvbzAz-mvLH-kZ518C8C2rC7FR4lVGw8iwd0uUlOZfMIrOwJFNGzQgrcrmGYB")
    })
});


exports.sendToWH = function () {
    hook.send("Your AREA has been triggered !");
};