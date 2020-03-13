import axios from 'axios';
const KEY = 'AIzaSyDIAnIjssl1frALsG1ePwwj4TBBZGxrSfQ';

GET = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key={AIzaSyDIAnIjssl1frALsG1ePwwj4TBBZGxrSfQ}'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

export function buildApiRequest(requestMethod, path, params, properties) {
    params = removeEmptyParams(params);
    let request;
    if (properties) {
        let resource = createResource(properties);
        request = window.gapi.client.request({
            'body': resource,
            'method': requestMethod,
            'path': path,
            'params': params
        });
    } else {
        request = window.gapi.client.request({
            'method': requestMethod,
            'path': path,
            'params': params
        });
    }
    return request;
}

export function buildChannelRequest(channelId) {
    return create(GET,
        '/youtube/v3/channels',
        {
            part: 'snippet,statistics',
            id: channelId,
            fields: 'kind,items(id,snippet(description,thumbnails/medium,title),statistics/subscriberCount)'
        }, null);
}