const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

app.set('views', viewsPath)
app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Main Page',
        name: 'Shane'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Shane'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'This is some helpful text'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Phiily',
        temp: 48
    })
})

const port = 5000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})