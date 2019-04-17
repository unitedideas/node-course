const request = require('request')

// const url = 'https://api.darksky.net/forecast/41bf8db408a505fd5531d64fe965e207/43.7774568,-120.9994968?key=value'

// request({ url: url, json: true }, (error, response)=>{
//     if (error){
//         console.log('Can\'t connect')
//     } else if(response.body.error) {
//         console.log('Unable to find that location')
//     } else 
//     {const temp = response.body.currently.temperature
//     const chanceOfRain = response.body.currently.precipProbability
//     console.log(`It is currently ${temp} degrees out. There is a ${chanceOfRain}% chance of rain.`)}
// })

const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidW5pdGVkaWRlYXMiLCJhIjoiY2p1bGU5N25pMjV3bTQ1cGc0czUxOXB3diJ9.-TKyDa1wrNdvpmH6v-wbqA&limit=1'

request({url:locationUrl, json: true}, (error, response)=>{
    console.log()
    if(error){
        console.log('You have network issues')
    } else if (response.body.features.length === 0) {
        console.log('Location not found')
    } else {
    const lat = response.body.features[0].center[1]
    const long = response.body.features[0].center[0]

    console.log(lat, long)
    }
})