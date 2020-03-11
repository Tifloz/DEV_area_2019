const request = require('request');

exports.makeRequest = (url, method, headers) =>
{
    let data = {
        url: url,
        method: method,
        headers: headers
    }
    return new Promise((function(resolve) {
        request(data, async function(error, response, body) {
            if (error != null)
                console.log("API call error: ", error);
            let result = JSON.parse(body)
            resolve(result)
        })
    }))
}