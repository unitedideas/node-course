const request = require('request')

const url = 'https://api.darksky.net/forecast/41bf8db408a505fd5531d64fe965e207/37.8267,-122.4233'

request({ url, json: true }, (error, response)=>{
    // console.log(response.body.currently)
    const temp = response.body.currently.temperature
    const chanceOfRain = response.body.currently.precipProbability
    console.log(`It is currently ${temp} degrees out. There is a ${chanceOfRain}% chance of rain.`)
})