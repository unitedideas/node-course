const express = require('express')

const app = express()


app.get('', (req, res) => {
    res.send('Root')
})

app.get('/help', (req, res) => {
    res.send('help')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/weather', (req, res) => {
    res.send('weather')
})

const port = 5000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})