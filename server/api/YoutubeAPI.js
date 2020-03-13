import axios from 'axios';
const KEY = 'AIzaSyDIAnIjssl1frALsG1ePwwj4TBBZGxrSfQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
})