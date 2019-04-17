const request = require('request')

const forecast = (lat, long, callback) => {
    const latLong = encodeURIComponent(`${long.toString()},${lat.toString()}`)

    const url = `https://api.darksky.net/forecast/41bf8db408a505fd5531d64fe965e207/${latLong}?key=value`

    request({ url: url, json: true }, (error, response)=>{
        if (error){
            callback('Network connection error', undefined)
        } else if(response.body.error) {
            callback('Unable to find that location', undefined)
        } else 
        {const temp = response.body.currently.temperature
        const chanceOfRain = response.body.currently.precipProbability
        const summary = response.body.daily.summary
        console.log(summary)
        callback(undefined, `${summary} Currently it is ${temp} degrees with a ${chanceOfRain}% chance of rain.`)}
    })

}

module.exports = forecast