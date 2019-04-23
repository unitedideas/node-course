const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req, res)=>{
    res.render('index', {title: 'Weather', name: 'Shane'})
})
app.get('/about',(req, res)=>{
    res.render('about', {title: 'About Me', name: 'Shane'})
})
app.get('/help',(req, res)=>{
    res.render('help', {msg: '<p>created by Shane</p>'})
})

app.get('/weather', (req, res) => {
    res.send({location:'Phiily', temp: 48})
})

const port = 5000

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})