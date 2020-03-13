const webhook = require('discord-webhook-node');
const hook = new webhook.Webhook('');


exports.sendToWH = function(){
    hook.send("Hello there!");
};