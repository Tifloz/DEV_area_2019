const api = require('../tools/api')
const KEY = 'AIzaSyDIAnIjssl1frALsG1ePwwj4TBBZGxrSfQ';

exports.getChannelInfos = async (channelId) => {
    let url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=' + channelId + '&key=' + KEY;
    return api.makeRequest(url, "GET", {}).then((result) => {
        console.log(result)
        return result
    }).catch((err) => {
        console.log(err)
        return false
    })
};

// export function buildApiRequest(requestMethod, path, params, properties) {
//     params = removeEmptyParams(params);
//     let request;
//     if (properties) {
//         let resource = createResource(properties);
//         request = window.gapi.client.request({
//             'body': resource,
//             'method': requestMethod,
//             'path': path,
//             'params': params
//         });
//     } else {
//         request = window.gapi.client.request({
//             'method': requestMethod,
//             'path': path,
//             'params': params
//         });
//     }
//     return request;
// }

// export function buildChannelRequest(channelId) {
//     return buildApiRequest(GET,
//         '/youtube/v3/channels',
//         {
//             part: 'snippet,statistics',
//             id: channelId,
//             fields: 'kind,items(id,snippet(description,thumbnails/medium,title),statistics/subscriberCount)'
//         }, null);
// }