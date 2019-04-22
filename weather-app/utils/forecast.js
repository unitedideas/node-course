const request = require('request')

const forecast = (lat, long, callback) => {
    const latLong = encodeURIComponent(`${lat.toString()},${long.toString()}`)

    const url = `https://api.darksky.net/forecast/41bf8db408a505fd5531d64fe965e207/${latLong}?key=value`

    request({ url, json: true }, (error, {body})=>{
        if (error){
            callback('Network connection error', undefined)
        } else if(body.error) {
            callback('Unable to find that location', undefined)
        } else 
        {const temp = body.currently.temperature
        const chanceOfRain = body.currently.precipProbability
        const summary = body.daily.summary
        callback(undefined, `${summary} Currently it is ${temp} degrees with a ${chanceOfRain}% chance of rain.`)}
    })

}

module.exports = forecast