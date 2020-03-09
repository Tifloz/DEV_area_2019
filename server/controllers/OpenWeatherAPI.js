var weather = require('openweather-apis');

weather.setLang('fr');
weather.setCity('Lille');
weather.setUnits('metric');
weather.setAPPID('f26e3f55520525a79db17c91009d621f');


exports.allTests = function () {

// get the Temperature
    weather.getTemperature(function (err, temp) {
        console.log("TEMP :" + temp);
    });

// get the Humidity
    weather.getHumidity(function (err, hum) {
        console.log(hum);
    });

// get the Description of the weather condition
    weather.getDescription(function (err, desc) {
        console.log(desc);
    });

// get all the JSON file returned from server (rich of info)
    weather.getAllWeather(function (err, JSONObj) {
        console.log(JSONObj);
    });
}