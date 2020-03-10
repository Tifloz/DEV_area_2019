const request = require('request');
const client_id = "lnq7m0rol8a9iro4exmm0pxwjhji59"

exports.findTwitchId = (TwitchChannel) =>
{
    return new Promise((function(resolve) {
        let data = {
            url: "https://api.twitch.tv/kraken/search/channels?query=" + TwitchChannel + "&api_version=5",
            method:'GET',
            headers: {
                "Client-ID": client_id
            }
        }
        request(data, async function(error, response, body) {
            let result = JSON.parse(body)
            if (result['error'] || result['_total'] == 0)
                resolve(false)
            resolve(result['channels'][0]['_id'])
        })
    }))
}


exports.isUserInLive = async (streamer) =>
{
    let streamer_id = await this.findTwitchId(streamer)
    if (streamer_id == false)
        return false;
    return new Promise((function(resolve) {
        let data = {
            url: "https://api.twitch.tv/helix/streams/metadata?user_id=" + streamer_id + "&api_version=5",
            method:'GET',
            headers: {
                "Client-ID": client_id
            }
        }
        request(data, async function(error, response, body) {
            let result = JSON.parse(body)
            if (result['error'] || result['_total'] == 0 || Object.keys(result['data']).length === 0) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    }))
}