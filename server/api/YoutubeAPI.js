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

exports.getChannelIdByUsername = async (channelUsername) => {
    let url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=' + channelUsername + '&key=' + KEY;
    return api.makeRequest(url, "GET", {}).then((channelInfos) => {
        if (!channelInfos || channelInfos.items.length == 0)
            return (false)
        return channelInfos.items[0].id
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

exports.isNewVideoUploadByUsername = async (channelUsername) => {
    let id = await this.getChannelIdByUsername(channelUsername)
    let result = await this.isNewVideoUpload(id)

    return result
}

exports.isNewVideoUpload = async (channelId) => {
    let channelInfos = await this.getChannelInfosById(channelId);
    let lastVideo;
    let publishedAt;
    const today = new Date();
    let res;

    if (!channelInfos || channelInfos.items.length == 0)
        return (false)
    res = await this.getChannelUploads(channelInfos.items[0].contentDetails.relatedPlaylists.uploads)
    
    if (!res || res.items.length == 0)
        return (false)
    lastVideo =  res.items[0];
    publishedAt = new Date(lastVideo.snippet.publishedAt)
    if (publishedAt.getDate() == today.getDate()
       &&  publishedAt.getMonth() == today.getMonth()
       &&  publishedAt.getFullYear() == today.getFullYear())
        return (true)
    else
        return (false)
}