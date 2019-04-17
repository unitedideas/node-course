const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]
if (!location) {
    console.log('Please provide location')
} else {

    geocode(location, (err, data) => {
        if (err) {
            return console.log('Error:', err)
        } else {
            forecast(data.lat, data.long, (err, forecastData) => {
                if (err) {
                    return console.log('Error:', err)
                } else {
                    console.log(data.place)
                    console.log('Data:', forecastData)
                }
            })
        }
    })
}