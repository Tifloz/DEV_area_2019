const api = require('../tools/api')
const KEY = 'AIzaSyDIAnIjssl1frALsG1ePwwj4TBBZGxrSfQ';

exports.getChannelInfosById = async (channelId) => {
    let url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=' + channelId + '&key=' + KEY;
    return api.makeRequest(url, "GET", {}).then((result) => {
        return result
    }).catch((err) => {
        console.log(err)
        return false
    })
};

exports.getChannelInfosByUsername = async (channelUsername) => {
    let url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=' + channelUsername + '&key=' + KEY;
    return api.makeRequest(url, "GET", {}).then((result) => {
        return result
    }).catch((err) => {
        console.log(err)
        return false
    })
};

exports.getChannelUploads = async (channelId) => {
    let url= 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + channelId + '&key=' + KEY;
    return api.makeRequest(url, "GET", {}).then((result) => {
        return result
    }).catch((err) => {
        console.log(err)
        return false
    })
};

exports.isNewVideoUpload = async (channelId) => {
    let channelInfos = await this.getChannelInfosById(channelId);
    const today = new Date()

    if (!channelInfos || channelInfos.items.length == 0)
        return (false)
    let res = await this.getChannelUploads(channelInfos.items[0].contentDetails.relatedPlaylists.uploads)//.then((res) => {
    let lastVideo;
    let publishedAt;

        if (!res || res.items.length == 0)
            return (false)
        lastVideo =  res.items[0];
        publishedAt = new Date(lastVideo.snippet.publishedAt)
        console.log(publishedAt)
       if (publishedAt.getDate() == today.getDate()
       &&  publishedAt.getMonth() == today.getMonth()
       &&  publishedAt.getFullYear() == today.getFullYear())
            return (true)
        else
            return (false)
}

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