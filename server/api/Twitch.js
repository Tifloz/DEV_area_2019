const api = require('../tools/api')
const request = require('request');
const client_id = "lnq7m0rol8a9iro4exmm0pxwjhji59"

exports.findTwitchId = (TwitchChannel) =>
{
    url = "https://api.twitch.tv/kraken/search/channels?query=" + TwitchChannel + "&api_version=5"
    return api.makeRequest(url, "GET", { "Client-ID": client_id })
        .then((result) => {
            if (result['error'] || result['_total'] == 0)
                return (false)
            return (result['channels'][0]['_id'])
        })
}

exports.isUserInLive = async (streamer) =>
{
    let streamer_id = await this.findTwitchId(streamer)
    if (streamer_id == false)
        return false;
    let url = "https://api.twitch.tv/helix/streams/metadata?user_id=" + streamer_id + "&api_version=5"
    return api.makeRequest(url, "GET", { "Client-ID": client_id })
        .then((result) => {
            if (result['error'] || result['_total'] == 0 || Object.keys(result['data']).length === 0) {
                return (false)
            } else {
                return (true)
            }
        })
}