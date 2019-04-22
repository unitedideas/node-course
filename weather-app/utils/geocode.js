const request = require('request')

const geocode = (location, callback) => {
    const encodeLocation = encodeURIComponent(location)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeLocation}.json?access_token=pk.eyJ1IjoidW5pdGVkaWRlYXMiLCJhIjoiY2p1bGU5N25pMjV3bTQ1cGc0czUxOXB3diJ9.-TKyDa1wrNdvpmH6v-wbqA&limit=1`

    request({
        url,
        json: true
    }, (err, {body}) => {
        if (err) {
            callback('Unable to connect to location services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find that location', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                place: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode