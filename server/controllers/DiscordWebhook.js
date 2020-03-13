const webhook = require('discord-webhook-node');
const http = require('http');

const options = {
    host: 'localhost',
    path: '/user/{user_id}/discord',
    method: 'GET',
};
var hook = null;

var req = http.get(options, function(res) {
    var bodyChunks = [];
    res.on('data', function(chunk) {
        bodyChunks.push(chunk);
    }).on('end', function() {
        var body = Buffer.concat(bodyChunks);
        hook = new webhook.Webhook(body);
    })
});


exports.sendToWH = function(){
    hook.send("Hello there!");
};