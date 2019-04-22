const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]
if (!location) {
    console.log('Please provide location')
} else {
    geocode(location, (err, {lat, long, place}) => {
        if (err) {
            return console.log('Error:', err)
        } else {
            forecast(lat, long, (err, forecastData) => {
                if (err) {
                    return console.log('Error:', err)
                } else {
                    console.log(place)
                    console.log('Data:', forecastData)
                }
            })
        }
    })
}