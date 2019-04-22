const https = require('https')
const url = 'https://api.darksky.net/forecast/41bf8db408a505fd5531d64fe965e207/40,-75'
const request = https.request(url, (res) => {
    let data = ''
    res.on('data', (chunk) => {
        data += chunk.toString()
    })
    res.on('error', (error)=>{
        console.log('Error: ', error)
    })

    res.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.end()