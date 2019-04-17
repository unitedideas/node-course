const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


geocode('china hat, Bend', (err, data) => {
    console.log('Error:', err)
    console.log('Data:', data)
})

forecast(-75.7088, 44.1545, (err, data) => {
    console.log('Error:', err)
    console.log('Data:', data)
})