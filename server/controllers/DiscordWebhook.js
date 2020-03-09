const webhook = require('discord-webhook-node');
const hook = new webhook.Webhook("");

hook.send("Hello there!");