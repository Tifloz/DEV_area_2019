const PornHub = require('pornhub.js');
const pornhub = new PornHub();

const options = {
    page: 1,
    order: 'Most Recent',
    production: 'professional',
    durationMin: 10,
    durationMax: 30
};

pornhub.search('Video', '', options).then(res => {
    res.data.forEach(item => {
        console.log(item)
        /* {
            title: 'Japanese Tokyo Hot',
            url: 'https://www.pornhub.com/view_video.php?viewkey=***',
            duration: '14:24',
            hd: true,
            premium: false,
            preview: 'https://ci.phncdn.com/videos/***.jpg'
        } */
    })
});

function getLatestVideo() {

}