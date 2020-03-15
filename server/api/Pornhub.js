const PornHub = require('pornhub.js');
const pornhub = new PornHub();
var last;
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
        if (res.data[0] !== last) {
            last = res.data[0];
            return true;
        }
        else{
            return false
        }
    });
};