
const database = require('./firebase')
const mailer = require('./mailer')
const services = require('../services.json')
const cron = require("node-cron")
const twitch = require('../api/Twitch')
const weather = require('../api/OpenWeather')
const pornhub = require('../api/Pornhub')
const youtubr = require('../api/YoutubeAPI')

exports.isAreaOnEvent = async (area, email) => {
    if (area['event'] === undefined)
        return
    let service = area['event']['service']
    let action = area['event']['action']
    let serviceActions = {
        'twitch': {
            'isInLive': twitch.isUserInLive
        },
        'youtube': {
            'isNewVideo': youtube.isNewVideoUpload
        }
    }
    let serviceReactions = {
        'gmail': {
            'send_mail': mailer.sendMail
        },
    }
    if (serviceActions[service] === undefined) {
        console.log('Service ', service, ' or action ', action, ' not founded');
        console.log('Please add your action/service to services.json or inside serviceActions');
        return;
    } else {
        toTrigger = await serviceActions[service][action]()
        console.log('area to trigger: ', toTrigger);
        if (toTrigger) {
            let subject = "l'évènement " + action + " à été trigger!";
            let message = "Met nous un bon grade stp !"
            serviceReactions['gmail']['send_mail'](email, subject, message)
            console.log('area triggered: ', area);
        }
    }
}

exports.userArea = (user) => {
    database.getDocumentWhere('Area', 'user_id',  user['id'])
        .then((areas) => {
            if (areas === null || areas === undefined)
                return;
            areas.forEach(area => {
                this.isAreaOnEvent(area, user['email'])
            })
        })
}

exports.catchEvents = () => {
    cron.schedule("* * * * *", () => {
        console.log('Begin to catch events')
        database.getAllDocuments('User').then((users) => {
            users.forEach(user => {
                this.userArea(user)
            });
        })
    });
}