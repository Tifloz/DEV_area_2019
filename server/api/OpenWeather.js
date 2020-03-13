var weather = require('openweather-apis');

weather.setLang('fr');
weather.setCity('Lille');
weather.setUnits('metric');
weather.setAPPID('f26e3f55520525a79db17c91009d621f');


exports.isNegativeTemp = function () {
    weather.getTemperature(function (err, temp) {
        if (temp < 0)
            return true;
        else
            return false;
    });
};

exports.isCloudy = function () {
    weather.getAllWeather(function (err, JSONObj) {
        if (JSONObj.clouds.all > 50)
            return true;
        else
            return false;
    });
};

exports.importantHumidity = function() {
    weather.getHumidity(function (err, hum) {
        if (hum > 50)
            return true;
        else
            return false;
    });
};

exports.allTests = function () {

// get all the JSON file returned from server (rich of info)
    weather.getAllWeather(function (err, JSONObj) {
        console.log(JSONObj.clouds.all);
    });
};