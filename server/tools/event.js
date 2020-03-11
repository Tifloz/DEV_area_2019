
const database = require('./firebase')
const mailer = require('./mailer')
const services = require('../services.json')
const cron = require("node-cron")
const twitch = require('../api/Twitch')
const weather = require('../api/OpenWeather')
const pornhub = require('../api/Pornhub')

exports.isAreaOnEvent = async (area) => {
    if (area['event'] === undefined)
        return
    let service = area['event']['service']
    let action = area['event']['action']
    let serviceActions = {
        'twitch': {
            'isInLive': twitch.isUserInLive
        },
        'openweather': {
            'isnegativetemp': weather.isNegativeTemp,
            'isCloudy': weather.isCloudy
        },
        'pornhub': {

        }
    }
    let serviceReactions = {
        'gmail': {
            'send_mail': mailer.sendMail
        },
    }
    let obj = "l'évènement " + action + " à été trigger!";
    let message = "Met nous un bon grade stp !"
    if (serviceActions[service] === undefined) {
        console.log('service ', service, ' not added yet')
        return;
    }
    if (serviceActions[service][action] === undefined) {
        console.log('action ', action, ' for service ', service, ' not added yet')
        return;
    }
    if (serviceActions[service][action]())
        serviceReactions['gmail']['send_mail'](user['email'], obj , message)
}

exports.userArea = (user) => {
    database.getDocumentWhere('Area', 'user_id',  user['id'])
        .then((areas) => {
            if (areas === null || areas === undefined)
                return;
            areas.forEach(area => {
                this.isAreaOnEvent(area)
            })
        })
}

exports.test = () => {
    database.getAllDocuments('User').then((users) => {
        users.forEach(user => {
            this.userArea(user)
        });
    })
}

exports.listenToEvents = () => {
    cron.schedule("* * * * *", function() {
        database.getAllDocuments('Area').then((value) => {
            console.log(value)
        })
    });
}