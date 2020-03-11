const database = require('./firebase')
const mailer = require('./mailer')
const services = require('../services.json')
const cron = require("node-cron")


exports.isAreaOnEvent = (area) => {
    if (area['event'] === undefined)
        return
    let service = area['event']['service']
    let action = area['event']['action']
    console.log('service: ', service)
    console.log('action: ', action)
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
        mailer.sendMail('georges.rached@epitech.eu', "TES OU MEC", "ON VA FUMER LA")
        console.log("running a task every minute");
        test.allTests();
    });
}