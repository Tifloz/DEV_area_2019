const database = require('./firebase')
const mailer = require('./mailer')
const services = require('../services.json')
const cron = require("node-cron")
const twitch = require('../api/Twitch')
const weather = require('../api/OpenWeather')
const pornhub = require('../api/Pornhub')
const youtube = require('../api/YoutubeAPI')
const discord = require('../controllers/DiscordWebhook')

exports.isAreaOnEvent = async (area, email) => {
    if (area['event'] === undefined)
        return
    let service_action = area['event']['service']
    let action = area['event']['action']
    let service_reaction = area['trigger']['service']
    let reaction = area['trigger']['reaction'];
    let serviceActions = {
        'twitch': {
            'isInLive': twitch.isUserInLive
        },
        'youtube': {
            'isNewVideo': youtube.isNewVideoUpload
        },
        'openweather': {
            'isNegativeTemp': weather.isNegativeTemp,
            'isPositiveTemp': !weather.isNegativeTemp,
            'isCloudy': weather.isCloudy,
            'isSunny': !weather.isCloudy,
            'importantHumidity': weather.importantHumidity,
            'notImportantHumidity': !weather.importantHumidity
        },
        'pornhub': {
            'newVideo': pornhub.checkLastVideo
        }
    }
    let serviceReactions = {
        'gmail': {
            'send_mail': mailer.sendMail
        },
        'discord': {
            'send_message': discord.sendToWH()
        }
    }
    if (serviceActions[service_action] === undefined) {
        console.log('Service ', service_action, ' or action ', action, ' not founded');
        console.log('Please add your action/service to services.json or inside serviceActions');
        return;
    } else {
        toTrigger = await serviceActions[service_action][action]()
        if (toTrigger) {
            if (service_reaction == "gmail") {
                let subject = "l'évènement " + action + " à été trigger!";
                let message = "Met nous un bon grade stp !"
                serviceReactions['gmail']['send_mail'](email, subject, message)
            } else {
                serviceReactions[service_reaction][reaction]();
            }
            console.log('service event: ', service_action, ', ', action);
            console.log('reaction triggered: ', service_reaction);
        }
    }
}

exports.userArea = (user) => {
    database.getDocumentWhere('Area', 'user_id', user['id'])
        .then((areas) => {
            if (areas === null || areas === undefined)
                return;
            areas.forEach(area => {
                this.isAreaOnEvent(area, user['email'])
            })
        })
}

exports.catchEvents = () => {
    // cron.schedule("* * * * *", () => {
        console.log('Begin to catch events')
        database.getAllDocuments('User').then((users) => {
            users.forEach(user => {
                this.userArea(user)
            });
        })
    // });
}