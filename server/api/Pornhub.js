const PornHub = require('pornhub.js');
const pornhub = new PornHub();

const options = {
    page: 1,
    order: 'Most Recent',
    production: 'professional',
    durationMin: 10,
    durationMax: 30
};



exports.checkLastVideo = function (tag = 'all') {
    pornhub.search('Video', tag, options).then(res => {
        console.log(res.data[0]);
    });
};