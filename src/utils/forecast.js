const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/af9de691a547ce1f07c3077583d9776c/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather forecast services', undefined)
        } else if (body.error) {
            callback('Unable to find forecast for that location. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' it is currently ' + body.currently.temperature + ' and the temperature is ' + body.currently.temperature)
        }
    })

}

module.exports = forecast